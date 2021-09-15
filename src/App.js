import React, { useState } from 'react';
import { Main } from './Components/index.js';
import './App.css';
import { Navbar, NavDropdown, Form, Nav, FormControl, Button, Container, Col } from 'react-bootstrap'
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';

function App() {
  let [ login, setLogin] = useState(true);
  let [ page, setPage] = useState(1);
  let [ posts, setPosts] = useState([{
    post_id: 1,
    title: 'Firstaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    user: 'user',
    date: '21/09/13',
  }]);
  return (
    <div className="App">
      < Main />
    </div>
  );
}

export default App;
