import React from "react";
import fetchCityById from "../services/fetchCityById";
import styles from "./CityDetail.module.css";

function CityDetail({ id, onBack }) {
  const [city, setcity] = React.useState();
  //console.log(city);

  React.useEffect(() => {
    fetchCityById(id, setcity);
  }, [id, setcity]);

  //   if (city === undefined) return <h2>Cargando...</h2>;
  //   if (city === null) return <h2>Ciudad no Encontrada</h2>;
  //   return <div>{city.name}</div>;

  return (
    <>
      <div className={styles.city}>
        {city === undefined && <h2>Cargando...</h2>}
        {city === null && <h2>Ciudad no Encontrada</h2>}
        {city && (
          <>
            <h1 className={styles.title}>Detalles de la Ciudad</h1>
            <hr />
            <div className={styles.detail}>
              <div className={styles.propiedades}>
                <label htmlFor="ciudad">Nombre:</label>
                <span>{city.name}</span>
              </div>
              <div className={styles.propiedades}>
                <label htmlFor="max">Temperatura Máxima:</label>
                <span>{city.max}</span>
              </div>
              <div className={styles.propiedades}>
                <label htmlFor="min">Temperatura Mínima:</label>
                <span>{city.min}</span>
              </div>
              <div className={styles.propiedades}>
                <label htmlFor="lat">Latitud:</label>
                <span>{city.latitud}</span>
              </div>
              <div className={styles.propiedades}>
                <label htmlFor="lon">Longitud:</label>
                <span>{city.longitud}</span>
              </div>
              <div className={styles.propiedades}>
                <label htmlFor="viento">Viento:</label>
                <span>{city.wind}</span>
              </div>
              <div className={styles.propiedades}>
                <label htmlFor="pronostico">Pronóstico:</label>
                <span>{city.weather}</span>
              </div>
              <img
                className={styles.imagen}
                src={`https://openweathermap.org/img/wn/${city.img}@2x.png`}
                alt="Imagen del clima"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CityDetail;
