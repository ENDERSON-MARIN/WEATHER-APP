import React from "react";
import Card from "../components/Card.jsx";
import Cards from "../components/Cards.jsx";

import SearchBar from "../components/SearchBar.jsx";

import styles from "./CitiesPage.module.css";

function citiesPage({ data, handleOnClose, onSearch }) {
  return (
    <>
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
      <div className={styles.citiesContainer}>
        {data.length > 0 ? (
          <>
            <Card
              key={data[data.length - 1].id}
              cityId={data[data.length - 1].id}
              max={data[data.length - 1].max}
              min={data[data.length - 1].min}
              name={data[data.length - 1].name}
              img={data[data.length - 1].img}
            />
            <Cards cities={data} onClose={handleOnClose} />
          </>
        ) : (
          <span className={styles.noCity}>No hay ciudades para mostrar...</span>
        )}
      </div>
    </>
  );
}

export default citiesPage;
