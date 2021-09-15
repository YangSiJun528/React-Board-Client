import React, { useState } from 'react';
import './style.css';
import { Navbar, NavDropdown, Form, Nav, FormControl, Button, Container, Col } from 'react-bootstrap'
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';

function Header(props) {
  return (
  <Navbar className="mb-3">
    <Container>
      <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      {
        props.login === true
        ?        
        <Navbar.Text>
          Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
        :           
          <Button className="justify-content-end" variant="outline-primary">Login</Button>
        }
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;