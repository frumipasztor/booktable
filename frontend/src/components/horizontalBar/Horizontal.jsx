import React from "react";
import "./Horizontal.scss";
import HorizontalOffers from "./horizontalOffers";

function Horizontal() {
  return (
    <div className="horizontalContainer">
      <div className="siteTitle">
        <h2>Top ajánlataink</h2>
        <span className="decorSpan"></span>
      </div>
      <div className="horizontalItems">
        <HorizontalOffers />
      </div>
    </div>
  );
}

export default Horizontal;
