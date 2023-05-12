import React from "react";
import styles from "./Card.module.css";

const Card = ({ name, flag, continent }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={flag} alt={`${name} flag`} />
      </div>
      <div className={styles.infoContainer}>
        <h4 className={styles.nameCountry}>{name}</h4>
        <h4>Continent</h4>
        <p>{continent}</p>
      </div>
    </div>
  );
};

export default Card;
