import React from "react";
import { Link } from "react-router-dom";
import "./weeks.scss";
import "./responsivity.scss";

function Weeks() {
  return (
    <div className="weeksWrapper">
      <div className="weeksContainer">
        <div className="weeksContent">
          <h2>Heti ajánlatunk</h2>
          <h3>Margherita Pizza</h3>
          <Link to="/reservation">
            <button>Asztalfoglalás</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Weeks;
