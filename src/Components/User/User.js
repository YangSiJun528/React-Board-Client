import React, { useState, useEffect } from 'react';
import './style.css';
import { Navbar, NavDropdown, Form, Nav, FormControl, Button, Container, Col, Table,ListGroup, Pagination, Alert } from 'react-bootstrap'
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom';
import { LoadingBtn } from '../index.js';
import axios from 'axios';

// 중복확인 변경용 따로 만들어야 함
function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function User(props) {
  let history = useHistory();
  let { user_id } = useParams();
  let [ user, setUser ] = useState({id: "asd",name: "Asd",password: "asd123"})
  // 변경 결과 
  const [resultLoading, setResultLoading] = useState({});
  const [overlapChecking, setoverlapChecking] = useState({});
  //중복 결과
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
      // post 요청 보내고 결괴 빋이서 실행하기
      }, [resultLoading]);
  useEffect(() => { 
    axios.get(`/userId/${user_id}`)
      .then((result) => {
        setUser(result.data)
      })
      .catch();
    },[])
  return (
    <Container>
      <h3 className="mb-3">유저 페이지</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Name" value={user.name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <div className="mb-3 d-flex justify-content-between">
          <Col>
          <Form.Control type="text" autocomplete="off" placeholder="ID" value={user.id} />
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
          <Form.Control type="text" placeholder="Password" value={user.password} />
        </Form.Group>
        <div className="d-flex justify-content-between">
        <Link to="/"><Button variant="danger"  onClick={() => {
          }}>Log Out</Button></Link>
          <LoadingBtn request={simulateNetworkRequest} setResult={setResultLoading} loading={'Loading...'} unLoading={'변경'}/>
        </div>
      </Form>
    </Container>
  );
}

export default User;