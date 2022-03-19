import React from "react";
import { Link } from "react-router-dom";

const Thought = (props) => {
  return (
    <React.Fragment>
      <h1>Thought of the day</h1>
      <Link to="/thought-of-the-day">Thought</Link>
    </React.Fragment>
  );
};

export default Thought;
