import React, { useState } from "react";
import "./NavBar.modules.css";
import CartWidget from "../CartWidget/CartWidget";
import {
  CCollapse,
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarToggler,
} from "@coreui/react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@mui/material";

export const NavBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <>
        <CNavbar
          expand="lg"
          colorScheme="dark"
          className="bg-dark"
          placement="sticky-top"
          style={{ opacity: 0.9 }}
        >
          <CContainer fluid style={{ position: "relative" }}>
            <CNavbarBrand href="/" style={{ marginLeft: 15 }}>
              <img
                src="https://res.cloudinary.com/dnj3a7mfg/image/upload/v1687879191/NuevoLogo52_fr8pqc.png"
                alt="logo principal"
                width="50"
                height="50"
              />
            </CNavbarBrand>
            <CNavbarToggler
              aria-label="Toggle navigation"
              aria-expanded={visible}
              sx={{ color: "rgb(236, 236, 196)!important" }}
              onClick={() => setVisible(!visible)}
            />
            <CCollapse className="navbar-collapse" visible={visible}>
              <div>
                <Link to="/portfolio">
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      margin: "10px",
                      color: "rgb(236, 236, 196)!important",
                    }}
                  >
                    Portfolio
                  </Button>
                </Link>
                <Link to="/bio">
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      margin: "10px",
                      color: "beige!important",
                    }}
                  >
                    Bio
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ margin: "10px", color: "beige!important" }}
                  >
                    Contact
                  </Button>
                </Link>
              </div>
            </CCollapse>{" "}
            <CNavbarBrand className="widget" href="#">
              <CartWidget />
            </CNavbarBrand>
          </CContainer>
        </CNavbar>
      </>
      <Outlet />
    </>
  );
};

export default NavBar;
