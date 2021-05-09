import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Bookings from "../components/adminPage/Bookings";

function AdminDashboard() {
  return (
    <div className="adminDashboardPage">
      <Header />
      <div className="siteTitle">
        <h2>Foglalások kezelése</h2>
        <span className="decorSpan"></span>
      </div>
      <Bookings />
      <Footer />
    </div>
  );
}

export default AdminDashboard;
