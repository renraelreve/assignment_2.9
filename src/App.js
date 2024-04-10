// App.js
import mockAPI from "./api/mockapi";
import { useState } from "react";
import Table from "./components/Table";
import AreaForecast from "./components/AreaForecast";
import styles from "./components/Button.module.css";
// import AddForm from "./components/AddForm";

function App() {
  // useEffect(() => {
  //   apiGetAll();
  // }, []);

  // const apiGet = async () => {
  const [forecasts, setForecasts] = useState([]);
  const [areaForecast, setAreaForecast] = useState("");

  const apiGetAll = async () => {
    try {
      // const response = await mockAPI(`/product/`);
      const response = await mockAPI(`/environment/2-hour-weather-forecast/`);
      setForecasts(response.data.items[0].forecasts);
      console.log(response);
      console.log(
        response.data.items[0].forecasts.find(
          (item) => item.area === "Ang Mo Kio"
        ).forecast
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const apiGet = async (area) => {
    try {
      // const response = await mockAPI(`/product/`);
      const response = await mockAPI(`/environment/2-hour-weather-forecast/`);

      const text = response.data.items[0].forecasts.find(
        (item) => item.area === `${area}`
      ).forecast;

      setAreaForecast(`The forecast in ${area} is ${text}`);
    } catch (error) {
      setAreaForecast(`There is no forecast in ${area} !`);
      console.log(error.message);
    }
  };

  return (
    <div className="App">
      <AreaForecast getForecast={apiGet} areaForecast={areaForecast} />
      <button className={styles.button} onClick={apiGetAll}>
        Load all weather forecasts
      </button>

      <Table list={forecasts} />
      {/* <AddForm handlerAddItem={apiPost} /> */}
    </div>
  );
}

export default App;
