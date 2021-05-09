import React from "react";
import "./Horizontal.scss";
import HorizontalOffers from "./horizontalOffers";
import Fade from "react-reveal/Fade";
import "./responsivity.scss";

function Horizontal() {
  return (
    <div className="horizontalContainer">
      <div className="horizontalItems">
        <Fade bottom>
          <HorizontalOffers />
        </Fade>
      </div>
    </div>
  );
}

export default Horizontal;
