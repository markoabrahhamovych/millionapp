import React from "react";

//Libraries Imports
import { Routes, Route, BrowserRouter } from "react-router-dom";

//Style Imports
import "./styles/globals.css";
import "./styles/fonts.css";
import "./styles/variables.css";

//Page Imports
import { Home, GamePage, GameOverPage } from "./domains";

//Constants Imports
import { home, gameOverPage } from "./constants";

const App = () => {
  return (
    <div className={"page-container"}>
      <BrowserRouter>
        <Routes>
          <Route path={home} element={<Home />} />
          <Route path="/game-page/:id" element={<GamePage />} />
          <Route path={gameOverPage} element={<GameOverPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
