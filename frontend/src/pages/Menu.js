import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import PizzaFetch from "../components/pizzaFetch/PizzaFetch";

function Menu() {
  return (
    <div className="menu">
      <Header />
      <div className="pizzaFetchContainer">
        <div className="siteTitle">
        <h2>Étlapunk</h2>
        <span className="decorSpan"></span></div>
        <p className="shortText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          cursus tristique mauris id vehicula. Nulla vestibulum enim vitae
          laoreet viverra. Donec sollicitudin dignissim tellus, vel varius velit
          efficitur quis. Cras ut velit imperdiet, molestie leo eget,
          ullamcorper odio. Aenean scelerisque condimentum elit vel finibus.
          Suspendisse pharetra non lacus et maximus. Curabitur convallis ut orci
          non scelerisque. Duis mollis rutrum sem eu tristique.
        </p>
        <div className="menuContainer">
        <PizzaFetch />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Menu;
