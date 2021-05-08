import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Login from "../components/login/Login";

function LoginPage() {
  return (
    <div className="login">
      <Header />
      <div className="siteTitle">
        <h2>Dolgozói bejelentkezés</h2>
        <span className="decorSpan"></span>
      </div>
      <Login />
      <Footer />
    </div>
  );
}

export default LoginPage;
