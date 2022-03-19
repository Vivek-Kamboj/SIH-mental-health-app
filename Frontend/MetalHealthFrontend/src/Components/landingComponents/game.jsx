import React from "react";
import { Link } from "react-router-dom";

const Game = (props) => {
  return (
    <React.Fragment>
      <h1>Game</h1>
      <Link to="/all-games">All Games</Link>
    </React.Fragment>
  );
};

export default Game;
