import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Career from "../pages/public/Career";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import NewsDetails from "../pages/CategoryNews/NewsDetails";
import OthersLayout from "../layouts/OthersLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login";
import Signup from "../pages/Authentication/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "category/:id",
        loader: async () => {
          const res = await fetch("/news.json");
          return res.json();
        },
        hydrateFallbackElement: <h1>Loading ...</h1>,
        Component: CategoryNews,
      },
    ],
  },
  {
    path: "others",
    Component: OthersLayout,
    children: [
      {
        path: "about",
        Component: About,
      },
      {
        path: "career",
        Component: Career,
      },
      {
        path: ":id",
        loader: async () => {
          const res = await fetch("/news.json");
          return res.json();
        },
        hydrateFallbackElement: <h1>Loading ...</h1>,
        Component: NewsDetails,
      },
    ],
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signUp",
        Component: Signup,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router;
