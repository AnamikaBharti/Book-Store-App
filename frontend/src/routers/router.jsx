import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import Checkout from "../pages/books/Checkout";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/books/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboards/DashboardLayout";
import Dashboard from "../pages/dashboards/Dashboard";
import AddBook from "../pages/dashboards/addBook/AddBook";
import UpdateBook from "../pages/dashboards/editBook/UpdateBook";
import ManageBooks from "../pages/dashboards/manageBooks/ManageBooks";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/orders", element:<PrivateRoute> <OrderPage/></PrivateRoute>},
      { path: "/about", element: <h1>About</h1> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/cart", element: <CartPage/> },
      { path: "/checkout", element: <PrivateRoute><Checkout/> </PrivateRoute>},
      { path: "/books/:id", element: <SingleBook/> },
    ],
  },
   {
      path: "/admin",
      element: <AdminLogin/>
    },
{
  path:"dashboard", element:<AdminRoute><DashboardLayout/></AdminRoute>,children:[ 
    {path:"", element:<AdminRoute><Dashboard/></AdminRoute>},
    {path:"add-new-book", element:<AdminRoute><AddBook/></AdminRoute>},
    {path:"edit-book", element:<AdminRoute><UpdateBook/></AdminRoute>},
    {path:"manage-books", element:<AdminRoute><ManageBooks/></AdminRoute>},
  ]
}
]);
export default router;
