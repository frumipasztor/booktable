import React from "react";
import Header from "../components/header/Header";
import Horizontal from "../components/horizontalBar/Horizontal";
import Weeks from "../components/weeksPanel/Weeks";
import Footer from "../components/footer/Footer";
import AboutUs from "../components/aboutUs/aboutUs";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="siteTitle">
        <h2>Az étteremről</h2>
        <span className="decorSpan"></span>
      </div>
      <AboutUs />
      <div className="siteTitle">
        <h2>Top ajánlataink</h2>
        <span className="decorSpan"></span>
      </div>
      <Horizontal />
      <Weeks />
      <Footer />
    </div>
  );
}

export default Home;
