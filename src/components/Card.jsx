import React from "react";

import styles from "./Card.module.css";

import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Card(props) {
  // acá va tu código
  const { max, min, name, img, onClose, cityId } = props; //destructuring
  //console.log("img", img);
  return (
    <>
      <div className={`${styles.card}`}>
        <button className={styles.button} onClick={onClose}>
          <IoCloseCircleOutline />
        </button>
        <Link to={`/city/${cityId}`} className={styles.name}>
          {name}
        </Link>
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="Imagen del clima"
        />
        <div className={styles.temps}>
          <Temperatura label="Min: " temp={min} />
          <Temperatura label="Max: " temp={max} />
        </div>
      </div>
    </>
  );
}

//crear en un archivo aparte
function Temperatura({ label, temp }) {
  return (
    <div className={styles.temp}>
      <strong>
        <span>{label}</span>
      </strong>
      <strong>
        <span>{temp}</span>
      </strong>
    </div>
  );
}
