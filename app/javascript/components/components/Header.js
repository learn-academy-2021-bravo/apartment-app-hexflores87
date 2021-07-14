import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

class Header extends Component {
  render() {
    const { logged_in, sign_in_route, sign_out_route } = this.props;
    return (
      <>
        <h1>Apartment App</h1>
        {logged_in && <a href={sign_out_route}>Sign Out</a>}
        <div>
          <Navbar color="dark" light expand="md">
            <NavbarBrand href="/">Home</NavbarBrand>
            <Nav>
              <NavItem>
                <NavLink to="/apartmentindex">Apartment Listings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/apartmentnew">Create New Listing</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
        {!logged_in && <a href={sign_in_route}>Sign In</a>}
      </>
    );
  }
}

export default Header;
