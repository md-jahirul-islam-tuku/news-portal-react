import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import OthersLayout from "../layouts/OthersLayout";
import AuthLayout from "../layouts/AuthLayout";

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Career from "../pages/public/Career";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import NewsDetails from "../pages/CategoryNews/NewsDetails";
import Login from "../pages/Authentication/Login";
import Signup from "../pages/Authentication/Signup";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import PrivateRoutes from "./PrivateRoutes";
import AuthRoutes from "./AuthRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // ✅ Home route
        element: <Home />,
      },
      {
        path: ":id",
        loader: async () => {
          const res = await fetch("/news.json");
          return res.json();
        },
        hydrateFallbackElement: <h1>Loading....</h1>,
        element: <CategoryNews />,
      },
    ],
  },

  {
    path: "others",
    element: <OthersLayout />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "career",
        element: <Career />,
      },
      {
        path: ":id",
        loader: async () => {
          const res = await fetch("/news.json");
          return res.json();
        },
        hydrateFallbackElement: <h1>Loading....</h1>,
        element: (
          <PrivateRoutes>
            <NewsDetails />
          </PrivateRoutes>
        ),
      },
    ],
  },

  {
    path: "auth",
    element: (
      <AuthRoutes>
        <AuthLayout />
      </AuthRoutes>
    ),
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
