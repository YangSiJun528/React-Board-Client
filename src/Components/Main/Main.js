import React, { useState } from 'react';
import './style.css';
import { Navbar, NavDropdown, Form, Nav, FormControl, Button, Container, Col, Table,ListGroup } from 'react-bootstrap'
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';

function Main(props) {
  let history = useHistory();
  return (
    <Container>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
        />
        <Button variant="outline-primary">Search</Button>
      </Form>
      <ul class="d-flex justify-content-between list-group list-group-horizontal-sm">
                <li class="list-group-item flex-fill">Title</li>
                <li class="list-group list-group-horizontal-sm">
                  <li class="list-group-item w-80">User</li>
                  <li class="list-group-item">Date</li>
                </li>
              </ul>
            <ListGroup horizontal className="d-flex justify-content-between">
              <ListGroup.Item className="flex-fill">Title</ListGroup.Item>
              <ListGroup horizontal className="d-flex justify-content-between">
                <ListGroup.Item>User</ListGroup.Item>
                <ListGroup.Item>Date</ListGroup.Item>
              </ListGroup>
            </ListGroup>
          {
            props.posts.map((post) =>
            {return (
              <ListGroup horizontal className="d-flex justify-content-between" onClick={ () => {history.push(`/posts/${post.number}`)}}>
              <ListGroup.Item className="flex-fill"><p className="title d-block">{post.title}</p></ListGroup.Item>
              <ListGroup horizontal className="d-flex justify-content-between">
                <ListGroup.Item>{post.user}</ListGroup.Item>
                <ListGroup.Item>{post.date}</ListGroup.Item>
              </ListGroup>
            </ListGroup>
            )})
          }
    </Container>
  );
}

export default Main;