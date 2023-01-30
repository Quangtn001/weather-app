import "./app.css";
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";
import Detail from "./components/detail/Detail";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./data/WeatherApi";
import { BrowserRouter } from "react-router-dom";
function App() {
  const [lat, setLat] = useState("21.02851");
  const [lon, setLon] = useState("105.80481");
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    fetch(
      `${WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((res) => setWeather(res))
      .catch((err) => console.log(err));
  }, [lat, lon]);

  const handleOnCityChange = (searchData) => {
    setLat(searchData.value.split(" ")[0]);
    setLon(searchData.value.split(" ")[1]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div
          className="res container position-absolute overflow-hidden d-flex"
          style={{ height: "90vh" }}
        >
          <Sidebar data={weather} onCityChange={handleOnCityChange} />
          {weather && <Detail data={weather} />}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
