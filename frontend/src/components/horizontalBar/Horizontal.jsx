import React from "react";
import "./Horizontal.scss";
import HorizontalOffers from "./horizontalOffers";
import Fade from "react-reveal/Fade";

function Horizontal() {
  return (
    <div className="horizontalContainer">
      <div className="siteTitle">
        <h2>Top ajánlataink</h2>
        <span className="decorSpan"></span>
      </div>
      <div className="horizontalItems">
        <Fade bottom>
          <HorizontalOffers />
        </Fade>
      </div>
    </div>
  );
}

export default Horizontal;
