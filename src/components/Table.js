// components/table.js
import styles from "./Table.module.css";

function Table({ list }) {
  return (
    <div>
      <h1 style={{ marginBottom: "0px", marginTop: "0px" }}>Forecasts Table</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Area</th>
            <th>Forecast</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item) => (
              <tr key={item.area}>
                <td>{item.area}</td>
                <td>{item.forecast}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
