import Swal from "sweetalert2";

const apiKey = process.env.REACT_APP_APIKEY;

export default function fetchCoords(lat, lon, setData) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  )
    .then((respuesta) => respuesta.json())
    .then((json) => {
      if (json.main !== undefined) {
        const ciudad = {
          min: Math.round(json.main.temp_min),
          max: Math.round(json.main.temp_max),
          img: json.weather[0].icon,
          id: json.id,
          wind: json.wind.speed,
          temp: json.main.temp,
          name: json.name,
          weather: json.weather[0].main,
          clouds: json.clouds.all,
          latitud: json.coord.lat,
          longitud: json.coord.lon,
        };
        setData((oldCities) => [...oldCities, ciudad]);
      } else {
        Swal.fire({
          title: "Ciudad no encontrada!",
          text: "Por favor verifique e intente nuevamente!",
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#d33",
          timer: "3000",
        });
      }
    });
}
