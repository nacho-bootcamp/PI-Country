import React from "react";
import styles from "./CotainerCard.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { useState } from "react";
import Pagination from "../Paginado/Paginado";
import Filter from "../Filter/Filter";
import SearchBar from "../../components/SearchBar/SearchBar";

const ContainerCard = () => {
  const countries = useSelector((state) => {
    return state.countries.countries;
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastCountry = currentPage * itemsPerPage;
  const indexOfFirstCountry = indexOfLastCountry - itemsPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlerSear = () => {
    setCurrentPage(1);
  };

  return (
    <div>
      <SearchBar handlerSear={handlerSear} />
      <Filter handlerSear={handlerSear} />
      <div className={styles.back}>
        <div className={styles.container}>
          {currentCountries.map((country) => (
            <Card
              key={country.id}
              id={country.id}
              name={country.name}
              flag={country.flag}
              continent={country.continent}
            />
          ))}
        </div>
        <div>
          {currentCountries.length > 2 && (
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={countries.length}
              paginate={paginate}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContainerCard;
