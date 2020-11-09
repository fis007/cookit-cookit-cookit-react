import React, { useContext } from "react";
import SessionContext from "./contexts/SessionContext";

import { Navbar, Nav, NavLink } from "reactstrap";

export default function NavBar() {
  const {
    isOpen,
    toggleLogIn,
    loggedIn,
    toggleLoginModal,
    toggleSignUpModal,
    toggleAdminModal,
    adminLoggedIn,
    toggleAdminLogin,
  } = useContext(SessionContext);
  return (
    <div>
      <Navbar color="light" light expand="md">
        {adminLoggedIn ? (
          <NavLink onClick={() => toggleAdminLogin()}>Logout Admin</NavLink>
        ) : (
          <NavLink onClick={() => toggleAdminModal()}>Admin Login</NavLink>
        )}

        <Nav className="ml-auto">
          {loggedIn ? (
            <NavLink onClick={() => toggleLogIn()}>Logout</NavLink>
          ) : (
            <NavLink onClick={() => toggleLoginModal()}>User Login</NavLink>
          )}
          {loggedIn ? (
            <NavLink onClick={() => toggleSignUpModal()}>Sign Up</NavLink>
          ) : (
            ""
          )}
        </Nav>
      </Navbar>
    </div>
  );
}
