import React from "react";
import "./aboutUs.scss";

function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="siteTitle">
        <h2>Az étteremről</h2>
        <span className="decorSpan"></span>
      </div>
      <div className="aboutUsContainer">
        <div className="aboutUsleft">
          <img className="pizza1" src="/img/aboutUs/pizza1.png" alt=""></img>
          <img className="pizza2" src="/img/aboutUs/pizza2.png" alt=""></img>
          <img className="pizza3" src="/img/aboutUs/pizza3.png" alt=""></img>
        </div>
        <div className="aboutUsText">
          <p>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            Lorem Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
            ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
            sit amet Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
