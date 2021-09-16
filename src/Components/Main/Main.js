import React, { useState } from 'react';
import './style.css';
import { Navbar, NavDropdown, Form, Nav, FormControl, Button, Container, Col, Table,ListGroup } from 'react-bootstrap'
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';

function Main(props) {
  let history = useHistory();
  return (
    <Container>
      <Form className="d-flex mb-3">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
        />
        <Button variant="outline-primary">Search</Button>
      </Form>
      <div className="posts">
      <ListGroup horizontal className="d-flex justify-content-between lists mt-1">
        <ListGroup.Item className="flex-fill list">Title</ListGroup.Item>
        <ListGroup horizontal className="d-flex justify-content-between list">
          <ListGroup.Item className="user list">User</ListGroup.Item>
          <ListGroup.Item className="date list">Date</ListGroup.Item>
        </ListGroup>
      </ListGroup>
      {
        props.posts.map((post) =>
        {return (
        <ListGroup horizontal className="d-flex justify-content-between lists mt-1" onClick={ () => {history.push(`/posts/${post.number}`)}}>
          <ListGroup.Item className="flex-fill list"><p className="title d-block">{post.title}</p></ListGroup.Item>
          <ListGroup horizontal className="d-flex justify-content-between list">
            <ListGroup.Item className="user list">{post.user}</ListGroup.Item>
            <ListGroup.Item className="date list">{post.date}</ListGroup.Item>
          </ListGroup>
        </ListGroup>
        )})
      }
      </div>
      </Container>
  );
}

export default Main;