import React from "react";
import "./Footer.modules.css";
import { CFooter, CNavLink, CNavbarBrand } from "@coreui/react";

export const Footer = () => {
  return (
    <CFooter className="bg-dark">
      <CNavbarBrand href="#">
        <img
          src="https://res.cloudinary.com/dmqsnjyfq/image/upload/v1684876680/fotor_2023-5-23_18_15_32_gyinj9.png"
          alt="logo principal"
          width="80"
          height="70"
        />
      </CNavbarBrand>
      <div style={{ color: "white" }}>
        <CNavLink href="#" active>
          &copy; 2023 philosolutions.
        </CNavLink>
      </div>
    </CFooter>
  );
};

export default Footer;
