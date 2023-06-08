import React, { useState, useEffect } from "react";
import styles from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCountries,
  filterCountriesByActivity,
  orderName,
  orderPopulation,
} from "../../redux/actions/countries";
import { getActivities } from "../../redux/actions/activity";

const Filter = ({ handlerSear }) => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("");

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);
  const activity = useSelector((state) => state.activity.activities);

  const handlerFilter = (event) => {
    handlerSear();
    dispatch(filterCountries(event.target.value));
  };

  const handlerOrder = (event) => {
    dispatch(orderName(event.target.value));
    setOrder(event.target.value);
  };

  const handlerPopulation = (event) => {
    dispatch(orderPopulation(event.target.value));
    setOrder(event.target.value);
  };

  const handlerAct = (event) => {
    dispatch(filterCountriesByActivity(event.target.value));
  };
  return (
    <div className={styles.filter}>
      <div>
        <h3>Filter by Continent:</h3>
        <select onChange={handlerFilter}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="South America">South America</option>
          <option value="North America">North America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctica">Antarctica</option>
        </select>
      </div>

      <div>
        <h3>Order:</h3>
        <select value={order} onChange={handlerOrder}>
          <option value="All">seleccionar</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
      </div>
      <div>
        <h3>Population:</h3>
        <select onChange={handlerPopulation}>
          <option value="All">seleccionar</option>
          <option value="Mayor">Mayor</option>
          <option value="Menor">Menor</option>
        </select>
      </div>
      <div>
        <h3>Activities</h3>
        <select onChange={handlerAct}>
          <option value="All">All</option>
          {activity.map((act) => {
            return (
              <option value={act.name} key={act.id}>
                {act.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Filter;
