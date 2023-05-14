import React from "react";
import styles from "./CotainerCard.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const CotainerCard = () => {
  const country = useSelector((state) => state.countries.countries);

  return (
    <div className={styles.container}>
      {country.map((element) => {
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
