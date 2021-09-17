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
  useEffect(() => {
    if (!isOverlapChecking) {
      simulateNetworkRequest().then(() => {
        // 중복 시
        setOverlap(true);
        setOverlapAlert(true);
        setOverlapChecking(false);
      })
      .catch(() => {
        // 중복 아님
        setOverlap(false);
        setOverlapAlert(false);
        setOverlapChecking(false);
      });
    }
  }, [isOverlapChecking]);
  const handleClick = () => {setOverlapChecking(true);setOverlapAlert(false);};
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <div className="mb-3 d-flex justify-content-between">
          <Form.Control type="email" placeholder="ID" />
          {
            overlap 
            ? <Button
            variant="primary overlapBtn"
            disabled={isOverlapChecking}
            onClick={!isOverlapChecking ? handleClick : null}>
            {
            !isOverlapChecking ? '중복확인' : '확인중'
            }
          </Button>
          :<Button variant="primary overlapBtn" disabled>확인됨</Button>
          }
          </div>
          { !overlapAlerts || <Alert variant="danger">이미 존재하는 ID 입니다.</Alert> }
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Login;