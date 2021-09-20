import React, { useState } from 'react';
import { Main, Header, Login, Register } from './Components/index.js';
import './App.css';
import { Navbar, NavDropdown, Form, Nav, FormControl, Button, Container, Col } from 'react-bootstrap'
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';

function App() {
  let [ login, setLogin] = useState(true);
  let [ user, setUser] = useState({
    id: 'user1234!',
    password: 'password',
    name: 'User'
  });
  let [ posts, setPosts] = useState([{
    post_id: 1,
    title: 'Firstaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    user: 'user',
    date: '21/09/13',
  },
  {
    post_id: 12,
    title: 'aaaaa',
    user: 'asdas',
    date: '21/09/13',
  }
]);
  return (
    <div className="App">
      <Header login={ login } user={ user }/>
      <Switch>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/post/:post_id">
          <p>글 보기 페이지 입니다.</p>
        </Route>
        <Route path="/user/:user_id">
          <p>유저 정보 페이지 입니다.</p>
        </Route>
        <Route path="/">
          < Main posts = { posts }/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
