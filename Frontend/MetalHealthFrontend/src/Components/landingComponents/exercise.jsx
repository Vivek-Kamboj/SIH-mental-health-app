import React from "react";
import { Link } from "react-router-dom";

const Exercise = (props) => {
  return (
    <React.Fragment>
      <h1>Exercise with us</h1>
      <Link to="/exercise-with-us">Exercise with us</Link>
    </React.Fragment>
  );
};

export default Exercise;
