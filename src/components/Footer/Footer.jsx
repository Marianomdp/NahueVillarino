import React from "react";
import "./Footer.modules.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-nav">
        <ul>
          <li>
            <a href="#seccion1">Specials</a>
          </li>
          <li>
            <a href="#seccion2">Nature</a>
          </li>
          <li>
            <a href="#seccion3">Twilight</a>
          </li>
          <li>
            <a href="#seccion3">Shadows</a>
          </li>
          <li>
            <a href="#seccion3">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-social">
        <ul>
          <li>
            <a href="https://facebook.com">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-logo">
        <img
          src="https://res.cloudinary.com/dmqsnjyfq/image/upload/v1684185359/logo-removebg-preview_dout9y.png"
          alt="Logo"
        />
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 PHILOSOLUTIONS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
