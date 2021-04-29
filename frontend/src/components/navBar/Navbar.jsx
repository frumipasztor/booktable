import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import "./Navbar.scss";

function Navbar() {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSideBar} />
        </Link>
      </div>
      <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
        <div className="navbar-toggle">
          <Link to="#" className="menu-bars">
            <AiIcons.AiOutlineClose onClick={showSideBar} />
          </Link>
        </div>
        <div className="menu-points">
          <ul className="nav-menu-items">
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    {/* {item.icon} */}
                    <span className="title">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        
        <div className="socials">
          <span className="decor"></span>
          <p className="rest-name">La Piccola Italia</p>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
