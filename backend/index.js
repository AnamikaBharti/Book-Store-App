 const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
require('dotenv').config();

// middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'https://book-store-app-pi-eight.vercel.app/'],
    credentials: true
}));

// api routes
const bookRoutes = require('./src/books/book.route');
const orderRoutes = require("./src/orders/order.route");
const userRoutes =  require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

// Connect to MongoDB
async function main() {
  await mongoose.connect(process.env.DB_URL);
  // THE BAD "/" ROUTE HAS BEEN REMOVED.
}

main().then(() => console.log("Mongodb connect successfully!")).catch(err => console.log(err));

export default app;