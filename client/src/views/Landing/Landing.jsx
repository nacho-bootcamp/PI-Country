import React from "react";
//import styles from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>soy el Landing</h1>
      <Link to="/home">
        <button>Siguiente</button>
      </Link>
    </div>
  );
};

export default Landing;
