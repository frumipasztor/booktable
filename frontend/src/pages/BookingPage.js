import React from "react";
import Header from "../components/header/Header";
import Booking from "../components/book/booking";
import Footer from "../components/footer/Footer";

function BookingPage() {
  return (
    <div className="reservation">
      <Header />
      <div className="siteTitle">
        <h2>Asztalfoglalás</h2>
        <span className="decorSpan"></span>
      </div>
      <Booking/>
      <Footer />
    </div>
  );
}

export default BookingPage;
