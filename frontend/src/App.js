import React from "react";
import "./App.scss";
import Navbar from "./components/navBar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/reservation" component={Reservation} />
          <Route path="/loginPage" component={LoginPage} />
          <Route path="/adminDashboard" component={AdminDashboard} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
