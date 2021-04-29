import React from "react";
import Header from "../components/header/Header";
import Horizontal from "../components/horizontalBar/Horizontal";
import Weeks from "../components/weeksPanel/Weeks";
import Footer from "../components/footer/Footer";


function Home() {
  return (
    <div className="home">
      <Header />
      <Horizontal/>
      <Weeks/>
      <Footer/>
    </div>
  );
}

export default Home;
