import React from "react";
import "./aboutUs.scss";

function AboutUs() {
  return (
    <div className="aboutUs">
      <h2 className="aboutUsTitle">Az étteremről</h2>
      <div className="aboutUsContainer">
        {/* <img src="/img/otherimages/aboutus.jpeg" alt=""></img> */}
        <div className="aboutUsleft"></div>
        <div className="aboutUsText">
          <p>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet.
          </p>

          <p>
            {" "}
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            Lorem Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
            ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
            sit amet Lorem ipsum dolor sit amet
          </p>
          <p>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
