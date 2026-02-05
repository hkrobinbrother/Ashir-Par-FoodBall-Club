import { createBrowserRouter } from "react-router";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Players from "../Pages/Players/Players";
import Matches from "../Pages/Matches/Matches";
import News from "../Pages/News/News";
export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayOut></MainLayOut> ,
    children: [
       { path: '/',
        element:<Home></Home>
    },
    {
      path:'/players',
      element:<Players></Players>
    },
    {
      path:'/matches',
      element:<Matches></Matches>
    },
    {
      path:'/news',
      element:<News ></News>
    }
    ],
  },
]);