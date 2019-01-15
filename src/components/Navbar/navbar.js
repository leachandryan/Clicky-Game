import React from 'react';
import { Navbar } from 'react-bootstrap';
import './navbar.css';

const Navigationbar = props => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        Clicky Game
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Text>
      Result {props.count} | {props.topScore}
    </Navbar.Text>
    <Navbar.Text>
      {props.gameMessage}
    </Navbar.Text>
  </Navbar>
);

export default Navigationbar;
