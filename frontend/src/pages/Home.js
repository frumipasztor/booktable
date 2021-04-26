import React from "react";
import PizzaFetch from "../components/pizzaFetch/PizzaFetch";
import Header from "../components/header/Header";
import AboutUs from "../components/aboutUs/aboutUs";


function Home() {
  return (
    <div className="home">
      <Header />
      <AboutUs />
      <PizzaFetch />
    </div>
  );
}

export default Home;
