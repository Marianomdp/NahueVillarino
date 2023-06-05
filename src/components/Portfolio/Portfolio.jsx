import { CNav, CNavItem, CNavLink } from "@coreui/react";
import React from "react";

export const Portfolio = () => {
  return (
    <CNav variant="tabs">
      <CNavItem>
        <CNavLink href="#">Nature</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Specials</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Day</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Night</CNavLink>
      </CNavItem>
    </CNav>
  );
};

export default Portfolio;
