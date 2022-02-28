import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../../assets/images/path-logo.svg";

const Header = () => {
  return (
    <Navbar className="c-header" data-testid="header">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="Path Logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="c-header__text">
            <strong>MARVEL</strong>
            <span className="c-header__text--light">Heroes</span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
