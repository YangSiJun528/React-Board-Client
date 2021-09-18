import React, { useState, useEffect } from 'react';
import './style.css';
import { Navbar, NavDropdown, Form, Nav, FormControl, Button, Container, Col, Table,ListGroup, Pagination, Alert } from 'react-bootstrap'
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import { LoadingBtn } from '../index.js';
import axios from 'axios';

//임시로 값 보내주는 함수 (나중에 중복확인용, 회원가입 신청용 따로 만들어야함)
function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function Register(props) {
  let history = useHistory();
  const [isOverlapChecking, setOverlapChecking] = useState(false);
  const [resultLoading, setResultLoading] = useState({});
  const [overlapChecking, setoverlapChecking] = useState({});
  const [overlap, setOverlap] = useState(true);
  const [overlapAlerts, setOverlapAlert] = useState(false);
  useEffect(() => {
    if (overlapChecking.hasOwnProperty('success')) {
      setOverlap(true);
      setOverlapAlert(true);
    } else if (overlapChecking.hasOwnProperty('failure')) {
      setOverlap(false);
      setOverlapAlert(false);
    } 
    }, [overlapChecking]);
  useEffect(() => {
    //로그인 버튼 클릭 할 때마다 실행됨
    }, [resultLoading]);
  return (
    <Container>
      <h3 className="mb-3">Sign Up</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" autocomplete="off" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <div className="mb-3 d-flex justify-content-between">
          <Col>
          <Form.Control type="text" autocomplete="off" placeholder="ID" />
          </Col>
          <Col md="auto">
          {
            overlap 
            ? <LoadingBtn request={simulateNetworkRequest} setResult={setoverlapChecking} loading={'확인중'} unLoading={'중복확인'}/>
          :<Button variant="primary overlapBtn" disabled>확인됨</Button>
          }
          </Col>
          </div>
          { !overlapAlerts || <Alert variant="danger">이미 존재하는 ID 입니다.</Alert> }
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div align="right">
          <LoadingBtn request={simulateNetworkRequest} setResult={setResultLoading} loading={'Loading...'} unLoading={'Sigh Up'}/>
        </div>
      </Form>
    </Container>
  );
}


export default Register;