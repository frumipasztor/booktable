import React, { useState, useEffect } from "react";
import LoadingMask from "../loadingMask/LoadingMask";
import BookedPerson from "./BookedPerson";
import "./admin.scss";
import "./responsivity.scss";

function Bookings() {
  //! DATA FETCH
  // eslint-disable-next-line
  const [data, setData] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const fetchData = async () => {
    const result = await fetch("http://localhost:3001/bookings");
    const jsonData = await result.json();
    console.log(jsonData);
    setData(jsonData.persons);
  };

  return (
    <div>
      <div className="bookingsPage">
        <h2>
          A foglalások törlése valamint újak megjelenítése, csak is frissítéssel
          érhetők el!
        </h2>
        <div className="bookedContainer">
          {loading ? (
            <LoadingMask />
          ) : (
            data.map((persons, index) => (
              <BookedPerson persons={persons} key={index} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Bookings;
