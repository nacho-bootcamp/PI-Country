import React, { useState } from "react";
import styles from "./Home.module.css";
import CotainerCard from "../../components/ContainerCard/CotainerCard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountries, cleanId } from "../../redux/actions/countries";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loading from "../../components/Loaders/Loaders";

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      dispatch(getCountries());
      setLoading(false);
    }, 1000);

    return () => dispatch(cleanId());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      {!loading ? (
        <div>
          <div className={styles.nav}>
            <SearchBar />
          </div>
          <CotainerCard />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;
