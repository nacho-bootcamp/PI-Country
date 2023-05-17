import React from "react";
import styles from "./CotainerCard.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { useState } from "react";
import Pagination from "../Paginado/Paginado";

const ContainerCard = () => {
  const countries = useSelector((state) => state.countries.countries);
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

  return (
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

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={countries.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ContainerCard;
