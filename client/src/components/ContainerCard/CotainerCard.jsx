import React from "react";
import styles from "./CotainerCard.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const CotainerCard = () => {
  const countries = useSelector((state) => state.countries);

  return (
    <div className={styles.container}>
      {countries.map((element) => {
        return (
          <Card
            key={element.id}
            id={element.id}
            name={element.name}
            flag={element.flag}
            continent={element.continent}
          />
        );
      })}
    </div>
  );
};

export default CotainerCard;
