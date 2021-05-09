import React, { useState, useEffect } from "react";
import LoadingMask from "../loadingMask/LoadingMask";
import Pizza from "./Pizza";
import "./responsivity.scss";

function PizzaFetch() {
  //! DATA FETCH
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const fetchData = async () => {
    const result = await fetch("http://localhost:3001/pizza/");
    const jsonData = await result.json();
    console.log(jsonData);
    setData(jsonData.pizza);
  };

  return (
    <div className="pizza card">
      {loading ? (
        <LoadingMask />
      ) : (
        data.map((pizza, index) => <Pizza pizza={pizza} key={index} />)
      )}
    </div>
  );
}

export default PizzaFetch;
