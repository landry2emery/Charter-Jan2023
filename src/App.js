import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import { DisplayPoints } from "./functions/DisplayPoints.js";
import { GetAvailableMonths } from "./functions/GetAvailableMonths.js";

const URL = "https://63c5df26f3a73b34785f0b2d.mockapi.io/records";

function App() {
  const [data, setData] = useState([]);
  const [pointsRecord, setPointsRecord] = useState({});

  useEffect(() => {
    axios.get(URL).then((records) => {
      setData(records.data);
    });
  }, []);

  const handleOnButtonClick = () => {
    setPointsRecord(DisplayPoints(data));
  };

  return (
    <div className="Container">
      <div className="Content">
        <h1>Customer Rewards</h1>
        <div className="Data">
          <ul >
            {data.length > 0 ? (
              <>
                {data.map((customer) => {
                  return (
                    <li data-testid="customer" key={customer.id}>
                      <span> {customer.name} </span>
                      <span> {customer.date} </span>
                      <span> {customer.amount} </span>
                    </li>
                  );
                })}
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <div className="Button">
          <button onClick={handleOnButtonClick}>Display Points</button>
        </div>
        <div className="ShowResults">
          {Object.keys(pointsRecord).length > 0 ? (
            <ul>
              {Object.values(pointsRecord).map((record) => {
                return (
                  <li data-testid={`point-${record.name}`} key={record.name}>
                    {record.name} has obtained in{" "}
                    {console.log(record.pointsPerMonth)}
                    {GetAvailableMonths(record.pointsPerMonth)} and the total
                    points is <strong>{record.total}</strong>{" "}
                  </li>
                );
              })}
            </ul>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
