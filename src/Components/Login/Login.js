import React, { useState, useEffect } from 'react';
import './style.css';
import { Navbar, NavDropdown, Form, Nav, FormControl, Button, Container, Col, Table,ListGroup, Pagination, Alert } from 'react-bootstrap'
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import { LoadingBtn } from '../index.js';
import axios from 'axios';

//임시로 값 보내주는 함수
function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function Login(props) {
  let history = useHistory();
  const [resultLoading, setResultLoading] = useState({});
  useEffect(() => {
    //로그인 버튼 클릭 할 때마다 실행됨
    }, [resultLoading]);
  return (
    <Container>
      <h3 className="mb-3">Login</h3>
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
          <LoadingBtn request={simulateNetworkRequest} setResult={setResultLoading} loading={'Loading...'} unLoading={'Login'}/>
        </div>
      </Form>
    </Container>
  );
}

export default Login;