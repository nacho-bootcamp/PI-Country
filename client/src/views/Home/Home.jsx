import React from "react";
//import styles from "./Home.module.css";
import CotainerCard from "../../components/ContainerCard/CotainerCard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountries } from "../../redux/actions/countries";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  return (
    <div>
      <SearchBar />
      <CotainerCard />
    </div>
  );
};

export default Home;
