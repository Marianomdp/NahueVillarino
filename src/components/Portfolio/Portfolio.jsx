import { CNav, CNavItem, CNavLink } from "@coreui/react";
import React from "react";

export const Portfolio = () => {
  return (
    <CNav variant="tabs">
      <CNavItem>
        <CNavLink href="#" active>
          Active
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#" disabled>
          Disabled
        </CNavLink>
      </CNavItem>
    </CNav>
  );
};

export default Portfolio;
