import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetailsPage from "./pages/GameDetailsPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage/>,
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "games/:slug", element: <GameDetailsPage /> },
    ],
  
  },
]);

export default router;
