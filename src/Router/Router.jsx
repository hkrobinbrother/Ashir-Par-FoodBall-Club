import { createBrowserRouter } from "react-router";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayOut></MainLayOut> ,
    children: [
       { path: '/',
        element:<Home></Home>
    }
    ],
  },
]);