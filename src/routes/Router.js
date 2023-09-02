import Layout from "../components/Layout/Layout";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Shop from "../pages/Shop";
import Signup from "../pages/Signup";
import { createBrowserRouter } from "react-router-dom";

export const router=createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[
    {
        path: "/",
        element: <Home />,
        },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "Shop/:id",
        element: <ProductDetails />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "signup",
        element: <Signup />,
      }

    ]
  
  }])