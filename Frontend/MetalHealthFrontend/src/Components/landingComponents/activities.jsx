import React from "react";
import Thought from "./thought";
import Game from "./game";
import Music from "./music";
import Exercise from "./exercise";

const Activities = (props) => {
  return (
    <React.Fragment>
      <h1>Activities :</h1>
      <Thought />
      <Game />
      <Music />
      <Exercise />
    </React.Fragment>
  );
};

export default Activities;
