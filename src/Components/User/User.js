import React, { useState, useEffect } from 'react';
import './style.css';
import { Navbar, NavDropdown, Form, Nav, FormControl, Button, Container, Col, Table,ListGroup, Pagination, Alert } from 'react-bootstrap'
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';


function User(props) {
  let history = useHistory();
  return (
    <Container>
      <h3 className="mb-3">유저 페이지</h3>
    </Container>
  );
}

export default User;