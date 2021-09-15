import React, { useState } from 'react';
import './style.css';
import { Navbar, NavDropdown, Form, Nav, FormControl, Button, Container, Col } from 'react-bootstrap'
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';

function Main() {
  return (
    <Container>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
        />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Container>
  );
}

export default Main;