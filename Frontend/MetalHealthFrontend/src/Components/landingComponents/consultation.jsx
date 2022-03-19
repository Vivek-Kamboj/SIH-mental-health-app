import React from "react";
import { Link } from "react-router-dom";

const Consultation = (props) => {
  return (
    <React.Fragment>
      <h1>Consultation (Video Conferencing)</h1>
      <Link to="/video-conferencing">Video Conferencing</Link>
    </React.Fragment>
  );
};

export default Consultation;
