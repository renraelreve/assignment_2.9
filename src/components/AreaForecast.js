import { useState } from "react";
import styles from "./Button.module.css";

export default function AreaForecast({ areaForecast, getForecast }) {
  const [inputArea, setInputArea] = useState("");
  const [showForecast, setShowForecast] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    getForecast(inputArea);
    setShowForecast(true);
    inputArea === "" && alert("Please input an area");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Get weather forecast of an area</h1>
        <span>Area: </span>
        <input
          name="area"
          type="text"
          value={inputArea}
          onChange={(e) => {
            setInputArea(e.target.value);
            setShowForecast(false);
          }}
        />
        <br></br>
        <button className={styles.button}>Get forecast</button>
      </form>

      {showForecast && inputArea && (
        <h2 style={{ marginTop: "5px" }}>{areaForecast}</h2>
      )}

      <br />
    </div>
  );
}
