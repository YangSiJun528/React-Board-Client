import React, { useState, useEffect } from 'react';
import './style.css';
import { Navbar, NavDropdown, Form, Nav, FormControl, Button, Container, Col, Table,ListGroup, Pagination, Alert } from 'react-bootstrap'
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';

//임시로 값 보내주는 함수
function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function Login(props) {
  let history = useHistory();
  const [isOverlapChecking, setOverlapChecking] = useState(false);
  const [overlap, setOverlap] = useState(true);
  const [overlapAlerts, setOverlapAlert] = useState(false);
  const handleClick = () => {setOverlapChecking(true);setOverlapAlert(false);};
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <div className="mb-3 d-flex justify-content-between">
          <Form.Control type="text" autocomplete="off" placeholder="ID" />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div align="right">
          <Button variant="primary" type="button">Login</Button>
        </div>
      </Form>
    </Container>
  );
}

export default Login;