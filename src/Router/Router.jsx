import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Players from "../Pages/Players/Players";
import Matches from "../Pages/Matches/Matches";
import News from "../Pages/News/News";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardLayOut from "../LayOut/DashboardLayOut";
import NextMatchInput from "../Components/Dashboard/NextMatchInput";
import LatestResultInput from "../Components/Dashboard/LatestResultInput";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsInput from "../Components/Dashboard/NewsInput";
import FanMessageForMatch from "../Components/Dashboard/FanMessageForMatch";
import FanMessageForClub from "../Components/Dashboard/FanMessageForClub";
import WorkingStage from "../Components/Common/WorkingStage/WorkingStage";
import NewsDetail from "../Components/Common/NewsDetaills/NewsDetail";
import Profile from "../Pages/Dashboard/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/players",
        element: <Players></Players>,
      },
      {
        path: "/matches",
        element: <Matches></Matches>,
      },
      {
        path: "/news",
        element: <News></News>,
      },
      {
        path: "/news/:id",
        element: <NewsDetail></NewsDetail>,
      },
    ],
  },
  {path: "/login", element: <Login></Login>},
  {path: "/register", element: <Register></Register>},
  {path:"/workingStage", element:<WorkingStage></WorkingStage>},
  {
    path: "/dashboard",
    element: <DashboardLayOut></DashboardLayOut>,
    children: [
      {
        index: true,
        element: (<Dashboard></Dashboard>),
      },
      {
        path: "next-match",
        element: <NextMatchInput></NextMatchInput>,
      },
      {
        path: "latest-result",
        element: <LatestResultInput></LatestResultInput>,
      },
      {
        path: "news",
        element: <NewsInput></NewsInput>,
      },
      {
        path: "fanmessage",
        element: <FanMessageForMatch></FanMessageForMatch>,
      },
      {
        path: "fanmessageForClub",
        element: <FanMessageForClub></FanMessageForClub>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);
