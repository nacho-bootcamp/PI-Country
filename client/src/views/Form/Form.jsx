import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions/countries";
import { createActivities } from "../../redux/actions/activity";

const Form = () => {
  const country = useSelector((state) => state.countries.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  let countriesList = country.map((coun) => {
    return {
      name: coun.name,
      flag: coun.flags,
    };
  });

  const [formData, setFormData] = useState({
    name: "",
    difficulty: 1,
    duration: 0,
    season: "",
    countries: [],
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleDifficultyChange = (event) => {
    setFormData({
      ...formData,
      difficulty: parseInt(event.target.value),
    });
  };

  const handleDurationChange = (event) => {
    const [hours, minutes] = event.target.value.split(":");
    const durationInMinutes = parseInt(hours) * 60 + parseInt(minutes);

    setFormData((prevFormData) => ({
      ...prevFormData,
      duration: durationInMinutes,
    }));
  };

  const handleSeasonChange = (event) => {
    setFormData({
      ...formData,
      season: event.target.value,
    });
  };

  const handlerSelect = (event) => {
    setFormData({
      ...formData,
      countries: [...formData.countries, event.target.value],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createActivities(formData));
    setFormData({
      name: "",
      difficulty: 1,
      duration: 0,
      season: "",
      countries: [],
    });
    alert("creacion Exitosa");
  };

  return (
    <div className={styles.form}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <h2 className={styles.text}>Create Activities</h2>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="difficulty">Difficulty</label>
            <input
              type="range"
              name="difficulty"
              min="1"
              max="5"
              value={formData.difficulty}
              onChange={handleDifficultyChange}
            />
            <p>Difficulty level: {formData.difficulty}</p>
          </div>
          <div className={styles.field}>
            <label htmlFor="duration">Duration:</label>
            <input
              type="time"
              name="duration"
              min="01:00"
              max="05:59"
              placeholder="Enter duration"
              value={
                formData.duration === 0 ? "" : formatDuration(formData.duration)
              }
              onChange={handleDurationChange}
            />
          </div>
          <div className={styles.field}>
            <legend>Season</legend>
            <label>
              Primavera
              <input
                type="radio"
                name="season"
                value={"primavera"}
                checked={formData.season === "primavera"}
                onChange={handleSeasonChange}
              />
            </label>
            <label>
              Otoño
              <input
                type="radio"
                name="season"
                value={"otoño"}
                checked={formData.season === "otoño"}
                onChange={handleSeasonChange}
              />
            </label>
            <label>
              Verano
              <input
                type="radio"
                name="season"
                value={"verano"}
                checked={formData.season === "verano"}
                onChange={handleSeasonChange}
              />
            </label>
            <label>
              Invierno
              <input
                type="radio"
                name="season"
                value={"invierno"}
                checked={formData.season === "invierno"}
                onChange={handleSeasonChange}
              />
            </label>
          </div>
          <div className={styles.field}>
            <label htmlFor="countries">Countries</label>
            <select onChange={handlerSelect}>
              <option>Select a country</option>
              {countriesList.map((countri) => {
                return (
                  <option key={countri.id} value={countri.name}>
                    {countri.name}
                  </option>
                );
              })}
            </select>
            <ul>
              <li>{formData.countries.map((country) => country + " ,")}</li>
            </ul>
          </div>
          <button className={styles.button}>Create Activity</button>
        </form>
      </div>
    </div>
  );
};
function formatDuration(durationInMinutes) {
  const hours = Math.floor(durationInMinutes / 60)
    .toString()
    .padStart(2, "0");
  const minutes = (durationInMinutes % 60).toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

export default Form;
