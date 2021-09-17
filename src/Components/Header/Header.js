import React, { useState } from 'react';
import './style.css';
import { Navbar, NavDropdown, Form, Nav, FormControl, Button, Container, Col } from 'react-bootstrap'
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';

function Header(props) {
  let history = useHistory();
  return (
  <Navbar className="mb-3 nav">
    <Container>
      <Navbar.Brand><Link to="/">HOME</Link></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      {
        props.login === true
        ?        
        <Navbar.Text>
          <a onClick={()=>{ history.push('/user') }}>Mark Otto</a>
        </Navbar.Text>
        :      
        <>
          <Button onClick={()=>{ history.push('/register') }} className="justify-content-end sighUpBtn" variant="outline-primary">Sigh Up</Button>
          <Button onClick={()=>{ history.push('/login') }} className="justify-content-end" variant="outline-primary">Login</Button>
        </>
        }
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;