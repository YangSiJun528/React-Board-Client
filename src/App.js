import React, { useState } from 'react';
import { Main, Header, Login, Register, Write, Post, User } from './Components/index.js';
import './App.css';
import { Navbar, NavDropdown, Form, Nav, FormControl, Button, Container, Col } from 'react-bootstrap'
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';
import datas from './data.json'

function App() {
  let [ login, setLogin] = useState(true);
  let [ user, setUser] = useState({
    id: 'user1234!',
    password: 'password',
    name: 'User'
  });
  let [ posts, setPosts] = useState(datas.posts);
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
          <Post/>
        </Route>
        <Route path="/user/:user_id">
          <User/>
        </Route>
        <Route path="/write:post_id">
          <Write />
        </Route>
        <Route path="/write">
          <Write />
        </Route>
        <Route path="/">
          < Main posts = { posts }/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
