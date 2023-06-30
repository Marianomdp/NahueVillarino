import React from "react";

import { CFooter, CNavLink, CNavbarBrand } from "@coreui/react";
import { Outlet } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <Outlet />
      <CFooter className="bg-dark">
        <CNavbarBrand
          href="#"
          style={{ marginLeft: 10, marginTop: 5, marginBottom: 5 }}
        >
          <img
            src="https://res.cloudinary.com/dnj3a7mfg/image/upload/v1687879191/NuevoLogo52_fr8pqc.png"
            alt="logo principal"
            width="50"
            height="50"
          />
        </CNavbarBrand>
        <CNavbarBrand style={{ opacity: "0.4", marginLeft: 100 }}>
          <a href="https://www.instagram.com/nahuel_villarino/">
            <img
              src="https://res.cloudinary.com/dmqsnjyfq/image/upload/v1687014120/pngegg_4_gllbil.png"
              alt="instagram"
              width="30"
              height="30"
            />
          </a>
          <a href="https://www.facebook.com/nahuel.villarino.fotoyvideo/">
            <img
              src="https://res.cloudinary.com/dmqsnjyfq/image/upload/v1687014120/pngegg_5_w7pflt.png"
              alt="facebook"
              width="25"
              height="25"
            />
          </a>
          <a href="https://www.linkedin.com/in/nahuel-villarino-5313b424a/">
            <img
              src="https://res.cloudinary.com/dmqsnjyfq/image/upload/v1687014120/pngegg_6_heey7r.png"
              alt="linkedin"
              width="30"
              height="30"
            />
          </a>
          <a href="https://www.behance.net/nahuelvillarino">
            <img
              src="https://res.cloudinary.com/dmqsnjyfq/image/upload/v1688143082/pngwing.com_hvvh4l.png"
              alt="Behance"
              width="30"
              height="30"
            />
          </a>
          <a href="https://www.youtube.com/@nahuelvillarino42">
            <img
              src="https://res.cloudinary.com/dmqsnjyfq/image/upload/v1688143968/pngwing.com_1_vvpnhk.png"
              alt="youtube"
              width="70"
              height="30"
            />
          </a>
        </CNavbarBrand>
        <div style={{ color: "rgb(236, 236, 196)" }}>
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
