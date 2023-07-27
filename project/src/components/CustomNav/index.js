import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const CustomNav = () => {
  const [isOpen, setIsOpen] = useState(false);   
  const toggle = () => setIsOpen(!isOpen);  //Declare a function called "toggle" that will be used to toggle the value of "isOpen" between "true" and "false".

  return (
    <div className="custom-nav">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="mr-auto">
          
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/logout">Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNav;