import React, { useEffect, useState } from "react";
import ContainerCard from "../../components/ContainerCard/CotainerCard";
import Filter from "../../components/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions/countries";

const Home = () => {
  const dispatch = useDispatch();
  const { countries, selectedContinent } = useSelector(
    (state) => state.countries.country
  );
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    if (selectedContinent !== "") {
      setFilteredCountries(
        countries.filter((country) => country.continent === selectedContinent)
      );
    } else {
      setFilteredCountries(countries);
    }
  }, [selectedContinent, countries]);

  return (
    <div>
      <Filter />
      <ContainerCard countries={filteredCountries} />
    </div>
  );
};

export default Home;
