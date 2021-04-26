import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="burgermenu"></div>
        <div className="header-text">
          <h1>La piccola Italia</h1>
          <span></span>
          <h2>Best pizza in the world. </h2>
          <h3>Have you tasted better?</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;


