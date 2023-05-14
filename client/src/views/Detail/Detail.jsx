import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCountriesById, cleanId } from "../../redux/actions/countries";
import styles from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedCountry = useSelector(
    (state) => state.countries.selectedCountry
  );

  useEffect(() => {
    dispatch(getCountriesById(id));

    return () => dispatch(cleanId());
  }, [id, dispatch]);

  const { name, flag, capital, continent, subregion, area, population } =
    selectedCountry;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{name}</h1>
      <img className={styles.image} src={flag} alt={name} />
      <p className={styles.id}>{id}</p>
      <p className={styles.text}>Capital: {capital}</p>
      <p className={styles.text}>Continent: {continent}</p>
      <p className={styles.text}>
        SubRegion: {subregion ? subregion : "Has no Subregion"}
      </p>
      <p className={styles.text}>Area: {area ? area : "Has no area"}</p>
      <p className={styles.text}>Population: {population}</p>
    </div>
  );
};

export default Detail;
