import React from "react";

//Libraries Imports
import { Routes, Route, HashRouter as Router } from "react-router-dom";

//Style Imports
import "./styles/globals.css";
import "./styles/fonts.css";
import "./styles/variables.css";

//Page Imports
import { Home } from "./routes/Home";
import { GamePage } from "./routes/GamePage";
import { GameOverPage } from "./routes/GameOverPage";

//Constants Imports
import { home, gameOverPage } from "./constants";

const App = () => {
  return (
    <div className={"page-container"}>
      <Router>
        <Routes>
          <Route path={home} element={<Home />} />
          <Route path="/game-page/:id" element={<GamePage />} />
          <Route path={gameOverPage} element={<GameOverPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
