import React from "react";
import "./booking.scss";
import "./responsivity.scss";

const Booking = () => {
  return (
    <div className="regPage">
      <div className="tel">
        {" "}
        <h2>Telefonon</h2> 
        <span>Csak nyitvatartási időben!</span>
        <p>06 12/ 123- 1234</p>
      </div>
      <div className="email">
        <h2>Emailben</h2>
        <p>lapiccolaitalia@pizza.com</p>
      </div>
    </div>
  );
};

export default Booking;
