import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCountriesById, cleanId } from "../../redux/actions/countries";
import styles from "./Detail.module.css";
import Loading from "../../components/Loaders/Loaders";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const selectedCountry = useSelector(
    (state) => state.countries.selectedCountry
  );

  useEffect(() => {
    dispatch(getCountriesById(id))
      .then(() => setLoading(false))
      .catch((error) => console.log(error));

    return () => dispatch(cleanId());
  }, [id, dispatch]);

  const { name, flag, capital, continent, subregion, area, population } =
    selectedCountry;

  return (
    <div>
      {!loading ? (
        <div className={styles.detail}>
          <div className={styles.container}>
            <div>
              <img className={styles.image} src={flag} alt={name} />
            </div>
            <div>
              <h1 className={styles.title}>{name}</h1>
              <h2 className={styles.id}>Id: {id}</h2>
              <h3 className={styles.text}>Capital: {capital}</h3>
              <h3 className={styles.text}>Continent: {continent}</h3>
              <h3 className={styles.text}>
                SubRegion: {subregion ? subregion : "Has no Subregion"}
              </h3>
              <h3 className={styles.text}>
                Area: {area ? area : "Has no area"}
              </h3>
              <h3 className={styles.text}>Population: {population}</h3>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Detail;
