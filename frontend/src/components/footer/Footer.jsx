import React from "react";
import "./footer.scss";
import * as FaIcons from "react-icons/fa";
import "./responsivity.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footerleft">
        <h2>La Piccola Italia</h2>
        <span></span>
        <h3 className="sloganDeco">Best pizza in the world.</h3>
        <h3>Have you tasted better?</h3>
      </div>
      <div className="footermiddle">
        <h2>Nyitvatartás</h2>
        <h3>Hétköznap</h3>
        <h4>10.00 - 21.00</h4>
        <h3>Hétvégén </h3>
        <h4>11.00 - 24.00</h4>
      </div>
      <div className="footerright">
        <FaIcons.FaFacebookSquare />
        <FaIcons.FaInstagram />
        <FaIcons.FaYoutube />
        <FaIcons.FaTwitter />
        <FaIcons.FaPhone/>
      </div>
    </div>
  );
}

export default Footer;
