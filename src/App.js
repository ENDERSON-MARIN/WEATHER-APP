import React from "react";
import { Route } from "react-router-dom";
import Swal from "sweetalert2";

import fetchCity from "./services/fetchCity.js";
import fetchCoords from "./services/fetchCoords.js";

import styles from "./App.module.css";
import Nav from "./components/Nav";
import AboutPage from "./views/AboutPage";
import CitiesPage from "./views/CitiesPage.js";
import CityDetail from "./views/CityDetail";
import ContactPage from "./views/ContactPage.js";

function App() {
  const [data, setData] = React.useState([]);

  function onSearch(ciudad) {
    if (data.length > 5) {
      Swal.fire({
        title: "Máximo 6 ciudades!",
        text: "Por favor verifique e intente nuevamente!",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#d33",
        timer: "3000",
      });
    } else {
      fetchCity(ciudad, setData);
    }
  }

  function handleOnClose(id) {
    Swal.fire({
      title: "Estas Seguro de Eliminar esta Ciudad?",
      text: "No se puede Revertir Este proceso!",
      //type: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si,  Eliminar!",
    }).then((result) => {
      if (result.value) {
        setData((prevData) => {
          return prevData.filter((city) => city.id !== id);
        });
        //Swal.fire("Eliminada!", "Ciudad Eliminada Exitosamente!", "success");
        Swal.fire({
          title: "Eliminada!",
          text: "Ciudad Eliminada Exitosamente!",
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "green",
          timer: "3000",
        });
      }
    });
  }

  /* PARA DETECTAR MI UBICACION */
  React.useEffect(() => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition((pos) => {
        fetchCoords(pos.coords.latitude, pos.coords.longitude, setData);
      });
  }, []);

  return (
    <div className={styles.app}>
      <Nav />
      <div className={styles.bgi} />
      <div className={styles.container}>
        <Route path="/" exact>
          <CitiesPage
            data={data}
            handleOnClose={handleOnClose}
            onSearch={onSearch}
          />
        </Route>
        <Route
          path="/city/:id"
          render={({ match, history }) => {
            const id = parseInt(match.params.id);
            //console.log(id);
            return <CityDetail id={id} onBack={history.goBack} />;
          }}
        />
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
