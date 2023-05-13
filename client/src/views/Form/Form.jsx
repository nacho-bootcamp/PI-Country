import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    difficulty: 1,
    duration: "",
    season: "",
    countries: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // aquí puedes agregar la lógica para enviar los datos a la base de datos
  };

  return (
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
            onChange={handleInputChange}
          />
          <p>Difficulty level: {formData.difficulty}</p>
        </div>
        <div className={styles.field}>
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            name="duration"
            placeholder="Enter duration"
            value={formData.duration}
            onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
          </label>
          <label>
            Otoño
            <input
              type="radio"
              name="season"
              value={"otoño"}
              checked={formData.season === "otoño"}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Verano
            <input
              type="radio"
              name="season"
              value={"verano"}
              checked={formData.season === "verano"}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Invierno
            <input
              type="radio"
              name="season"
              value={"invierno"}
              checked={formData.season === "invierno"}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className={styles.field}>
          <label htmlFor="countries">Countries</label>
          <select
            name="countries"
            value={formData.countries}
            onChange={handleInputChange}
          >
            <option value={""}>Select a country</option>
            <option value={"red"}>Red</option>
            <option value={"blue"}>Blue</option>
            <option value={"green"}>Green</option>
          </select>
        </div>
        <button className={styles.button}>Create Activity</button>
      </form>
    </div>
  );
};

export default Form;
