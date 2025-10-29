 const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://book-store-app-pi-eight.vercel.app",
    ],
    credentials: true,
  })
);

// api routes
const bookRoutes = require("./src/books/book.route");
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

// root route (optional but useful for testing)
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// MongoDB connection
async function main() {
  await mongoose.connect(process.env.DB_URL);
}
main()
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.log(err));

// 👇 Key fix: export for Vercel
module.exports = app;
