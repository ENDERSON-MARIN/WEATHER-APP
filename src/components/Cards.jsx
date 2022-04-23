import React from "react";
import Card from "./Card";

import styles from "./Cards.module.css";

export default function Cards({ cities, onClose }) {
  // acá va tu código
  //console.log("cities", cities);
  // tip, podés usar un map
  return (
    <>
      {
        <div className={styles.cards}>
          {cities.map((city) => (
            <Card
              key={city.id}
              cityId={city.id}
              name={city.name}
              min={city.min}
              max={city.max}
              img={city.img}
              onClose={() => onClose(city.id)}
            />
          ))}
        </div>
      }
    </>
  );
}

