import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions/countries";
import { createActivities } from "../../redux/actions/activity";
import validation from "./validate";
import Modal from "../../components/Modal/Modal";
import check from "../../assets/img/check.png";

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
    };
  });
  const [modal, setModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    difficulty: 0,
    duration: 0,
    season: "",
    countries: [],
  });

  const [error, setError] = useState({
    name: "",
    difficulty: 0,
    duration: 0,
    season: "",
    countries: [],
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setError(
      validation({
        ...formData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handlerSelect = (event) => {
    if (formData.countries.length > 4) {
      setFormData({ ...formData, countries: [] });
    } else {
      setFormData({
        ...formData,
        countries: [...formData.countries, event.target.value],
      });
    }
    setError(
      validation({
        ...formData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createActivities(formData));
    setFormData({
      name: "",
      difficulty: 0,
      duration: 0,
      season: "",
      countries: [],
    });
  };

  const isFormValid = () => {
    if (
      formData.name === "" ||
      formData.difficulty === 0 ||
      formData.duration === 0 ||
      formData.season === "" ||
      formData.countries.length === 0
    )
      return true;
    else {
      return false;
    }
  };
  return (
    <div className={styles.form}>
      <div className={styles.container}>
        <img src="" alt="" />
        <form onSubmit={handleSubmit}>
          <h2 className={styles.text}>Create Activities</h2>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.text}>
              Name of the Activity
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name of the Activity..."
              value={formData.name}
              onChange={handleInputChange}
            />
            {error.name && <p className={styles.error}>{error.name}</p>}
          </div>
          <div className={styles.field}>
            <label htmlFor="difficulty" className={styles.text}>
              Difficulty
            </label>
            <input
              type="range"
              name="difficulty"
              min="1"
              max="5"
              value={formData.difficulty}
              onChange={handleInputChange}
            />
            {error.difficulty && (
              <p className={styles.error}>{error.difficulty}</p>
            )}
            <p>Difficulty level: {formData.difficulty}</p>
          </div>
          <div className={styles.field}>
            <label htmlFor="duration" className={styles.text}>
              Duration:
            </label>
            <input
              type="number"
              name="duration"
              max="24"
              min="0"
              value={formData.duration}
              onChange={handleInputChange}
            />
            {error.duration && <p className={styles.error}>{error.duration}</p>}
          </div>
          <legend className={styles.text}>Season</legend>
          <div className={styles.season}>
            <label>
              Spring
              <input
                type="radio"
                name="season"
                value={"Spring"}
                checked={formData.season === "Spring"}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Autumn
              <input
                type="radio"
                name="season"
                value={"Autumn"}
                checked={formData.season === "Autumn"}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Summer
              <input
                type="radio"
                name="season"
                value={"Summer"}
                checked={formData.season === "Summer"}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Winter
              <input
                type="radio"
                name="season"
                value={"Winter"}
                checked={formData.season === "Winter"}
                onChange={handleInputChange}
              />
            </label>
          </div>
          {error.season && <p className={styles.error}>{error.season}</p>}
          <div className={styles.field}>
            <label htmlFor="countries" className={styles.text}>
              Countries
            </label>
            <select onChange={handlerSelect}>
              <option>Select a country</option>

              {countriesList.map((countri) => {
                return (
                  <option key={countri.id} value={countri.id}>
                    {countri.name}
                  </option>
                );
              })}
            </select>
            {error.countries && (
              <p className={styles.error}>{error.countries}</p>
            )}
            <ul>
              <li>{formData.countries.map((country) => country + " , ")}</li>
            </ul>
          </div>
          <div className={styles.containerBtn}>
            <button
              onClick={() => setModal(!modal)}
              className={styles.button}
              disabled={isFormValid()}
            >
              Create Activity
            </button>
          </div>
        </form>
      </div>
      <Modal className={styles.modal} modal={modal} setModal={setModal}>
        <h1 className={styles.h1}>Successfully Created</h1>
        <img className={styles.imgModal} src={check} alt="" />
      </Modal>
    </div>
  );
};

export default Form;
