import React from "react";

//Libraries Imports
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

//Style Imports
import "./styles/globals.css";
import "./styles/fonts.css";
import "./styles/variables.css";

//Page Imports
import { Home, GamePage, GameOverPage } from "./domains";

//Constants Imports
import { home, gameOverPage } from "./constants";

const App = () => {
  console.log(window.location.origin);
  const router = createBrowserRouter(
    [
      {
        path: home,
        element: <Home />,
      },
      {
        path: "/game-page/:id",
        element: <GamePage />,
      },
      {
        path: gameOverPage,
        element: <GameOverPage />,
      },
      {
        path: "*",
        element: <Navigate to={"/"} />,
      },
    ],
    { basename: window.location.origin }
  );

  return (
    <div className={"page-container"}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
