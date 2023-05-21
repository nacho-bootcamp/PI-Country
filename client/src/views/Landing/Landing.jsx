import React from "react";
import styles from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <h1 className={styles.h1}>
          Welcome to our world travel and adventure page!
        </h1>
        <div className={styles.h3}>
          <h3>
            Explore the diversity of countries, travel the world making various
            activities which are created by the users themselves. On our
            platform, you will find detailed information about all countries,
            such as:
          </h3>
        </div>
        <div className={styles.li}>
          <ul>
            <li>name</li>
            <li>capital</li>
            <li>flag</li>
            <li>population</li>
            <li>continent</li>
            <li>subregion</li>
            <li>area</li>
          </ul>
        </div>
        <div className={styles.button}>
          <Link to="/home">
            <button>Start</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
