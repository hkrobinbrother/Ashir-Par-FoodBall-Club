import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Players from "../Pages/Players/Players";
import Matches from "../Pages/Matches/Matches";
import News from "../Pages/News/News";
import Dashboard from "../Pages/Dashboard/Dashboard";
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
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        
      }
    ]
  }
]);