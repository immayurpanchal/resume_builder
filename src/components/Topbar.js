import React from "react";
import { Navbar, Nav } from "rsuite";

const Topbar = props => {
  return (
    <Navbar appearance="inverse" componentClass="nav">
      <Navbar.Header>
        <h1 href="google.com">{props.title}</h1>
      </Navbar.Header>
      <Nav pullRight>
        <Nav.Item>Save</Nav.Item>
        <Nav.Item>Download PDF</Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Topbar;
