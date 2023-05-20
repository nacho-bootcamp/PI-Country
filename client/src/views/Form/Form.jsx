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
      id: coun.id,
      name: coun.name,
      flag: coun.flags,
    };
  });

  const [formData, setFormData] = useState({
    name: "",
    difficulty: 1,
    duration: 1,
    season: "",
    countries: [],
  });
  console.log(formData);

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
    setFormData({
      ...formData,
      [event.target.name]: parseInt(event.target.value),
    });
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
      duration: 1,
      season: "",
      countries: [],
    });
    alert("creacion Exitosa");
  };
  console.log(countriesList);
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
              type="number"
              name="duration"
              max="24"
              min="1"
              value={formData.duration}
              onChange={handleDurationChange}
            />
          </div>
          <div className={styles.field}>
            <legend>Season</legend>
            <label>
              Spring
              <input
                type="radio"
                name="season"
                value={"Spring"}
                checked={formData.season === "Spring"}
                onChange={handleSeasonChange}
              />
            </label>

            <label>
              Autumn
              <input
                type="radio"
                name="season"
                value={"Autumn"}
                checked={formData.season === "Autumn"}
                onChange={handleSeasonChange}
              />
            </label>
            <label>
              Summer
              <input
                type="radio"
                name="season"
                value={"Summer"}
                checked={formData.season === "Summer"}
                onChange={handleSeasonChange}
              />
            </label>
            <label>
              Winter
              <input
                type="radio"
                name="season"
                value={"Winter"}
                checked={formData.season === "Winter"}
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
                  <option key={countri.id} value={countri.id} id="country">
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

export default Form;
