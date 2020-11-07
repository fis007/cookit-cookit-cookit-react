import React, { useContext } from "react";
import SessionContext from "./contexts/SessionContext";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

export default function NavBar() {
  const { isOpen, toggle } = useContext(SessionContext);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavLink href="/components/">Admin Login</NavLink>
        <Nav className="ml-auto">
          <NavLink onClick={() => console.log("login")}>Login</NavLink>
          <NavLink onClick={() => console.log("sign up")}>Sign Up</NavLink>
        </Nav>
      </Navbar>
    </div>
  );
}
