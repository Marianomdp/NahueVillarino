import React from "react";

import { CFooter, CNavLink, CNavbarBrand } from "@coreui/react";
import { Outlet } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <Outlet />
      <CFooter className="bg-dark">
        <CNavbarBrand href="#">
          <img
            src="https://res.cloudinary.com/dmqsnjyfq/image/upload/v1684876680/fotor_2023-5-23_18_15_32_gyinj9.png"
            alt="logo principal"
            width="80"
            height="70"
          />
        </CNavbarBrand>
        <CNavbarBrand style={{ opacity: "0.4" }}>
          <a href="#">
            <img
              src="https://res.cloudinary.com/dmqsnjyfq/image/upload/v1687014120/pngegg_4_gllbil.png"
              alt="instagram"
              width="30"
              height="30"
            />
          </a>
          <a href="#">
            <img
              src="https://res.cloudinary.com/dmqsnjyfq/image/upload/v1687014120/pngegg_5_w7pflt.png"
              alt="facebook"
              width="25"
              height="25"
            />
          </a>
          <a href="/">
            <img
              src="https://res.cloudinary.com/dmqsnjyfq/image/upload/v1687014120/pngegg_6_heey7r.png"
              alt="linkedin"
              width="30"
              height="30"
            />
          </a>
        </CNavbarBrand>
        <div style={{ color: "white" }}>
          <CNavLink
            href="https://www.linkedin.com/in/mariano-collovatti-6265a2248/"
            active
          >
            &copy; 2023 Mariano Collovatti.
          </CNavLink>
        </div>
      </CFooter>
    </>
  );
};

export default Footer;
