import React, { useState, useEffect } from 'react';
import './style.css';
import { Navbar, NavDropdown, Form, Nav, FormControl, Button, Container, Col, Table,ListGroup, Pagination, Alert } from 'react-bootstrap'
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';


function Post(props) {
  let history = useHistory();
  let [content, setContent] = useState({title: "asd",body:"<h1>aaaa</h1><p>aaasdaa</p>"});
  let [user, setUser] = useState({id: "asd",name: "asd"});
  let { post_id } = useParams();
  useEffect(() => { 
  axios.get(`/page/${post_id}`)
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
      <div dangerouslySetInnerHTML={ {__html: content.body} }></div>
      <div align="right">
        <Button variant="primary"  onClick={() => {
          history.push(`/write/${post_id}`)
        }}>ReWrite</Button>
      </div>
    </Container>
  );
}

export default Post;