import React, { useState, useEffect } from 'react';
import './style.css';
import { Navbar, NavDropdown, Form, Nav, FormControl, Button, Container, Col, Table,ListGroup, Pagination, Alert } from 'react-bootstrap'
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';


function Post(props) {
  let history = useHistory();
  let [content, setContent] = useState({title: "asd",body:"<h1>aaaa</h1><p>aaasdaa</p>",date:"21/09/23"});
  let [user, setUser] = useState({id: "asd",name: "asd"});
  let { post_id } = useParams();
  useEffect(() => { 
  axios.get(`/post/${post_id}`)
    .then((result) => {
      setContent(result.data.content)
      setUser(result.data.user)
    })
    .catch();
  },[])
// 유저 정보 확인해서 지금 로그인 되어있으면 수정버튼 나타남
  return (
    <Container>
      <h1 className="display-4">{content.title}</h1>
      <hr/>
      <div align="right">
        <span className="mx-2">User: {user.name}</span>
        <span>Date: {content.date}</span>
      </div>
      <div dangerouslySetInnerHTML={ {__html: content.body} }></div>
      <div align="right">
        <Button variant="primary mx-2"  onClick={() => {
          history.push(`/write/${post_id}`)
        }}>ReWrite</Button>
        <Button variant="danger"  onClick={() => {
          history.push(`/`)
        }}>Delate</Button>
      </div>
      
    </Container>
  );
}

export default Post;