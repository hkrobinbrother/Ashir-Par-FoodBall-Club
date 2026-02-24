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
import PrivateRoute from "./PrivateRoute";
import PlayerInput from "../Components/Dashboard/PlayersInput";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/players", element: 
        <Players /> 
     },
      { path: "/matches", element: <Matches /> },
      { path: "/news", element: <News /> },
      { path: "/news/:id", element: <NewsDetail /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/workingStage", element: <WorkingStage /> },
  {
    path: "/dashboard",
    element: <PrivateRoute />, 
    children: [
      
      {
        element: <DashboardLayOut />, 
        children: [
          { index: true, element: <Dashboard /> },
          { path: "next-match", element: <NextMatchInput /> },
          { path: "latest-result", element: <LatestResultInput /> },
          { path: "news", element: <NewsInput /> },
          { path: "fanmessage", element: <FanMessageForMatch /> },
          { path: "fanmessageForClub", element: <FanMessageForClub /> },
          { path: "profile", element: <Profile /> },
          { path: "players", element: <PlayerInput/> },
        ],
      },
    ],
  },
]);
