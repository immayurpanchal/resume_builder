import React, { Component } from "react";
import "rsuite/dist/styles/rsuite.min.css";

import Topbar from "./components/Topbar.js";
import "./App.css";
import { Container, Header, Sidebar, Content } from "rsuite";
class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Header>
            <Topbar title="Resume Builder" />
          </Header>
        </Container>
        <Container>
          <Sidebar>Sidebar</Sidebar>
          <Content>Content</Content>
        </Container>
      </div>
    );
  }
}

export default App;
