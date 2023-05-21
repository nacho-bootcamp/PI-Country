import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, flag, continent }) => {
  return (
    <div className={styles.card}>
      <div>
        <img className={styles.imgContainer} src={flag} alt={name} />
      </div>
      <div className={styles.infoContainer}>
        <h1 className={styles.nameCountry}>{name}</h1>
        <h2>Continent: {continent}</h2>
      </div>
      <Link className={styles.buttonContainer} to={`detail/${id}`}>
        <button className={styles.button}>Readme more</button>
      </Link>
    </div>
  );
};

export default Card;
