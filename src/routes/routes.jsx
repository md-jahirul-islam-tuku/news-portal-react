import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Career from "../pages/public/Career";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import NewsDetails from "../pages/CategoryNews/NewsDetails";
import OthersLayout from "../layouts/OthersLayout";

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
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router;
