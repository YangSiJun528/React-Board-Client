import React, { useState, useEffect } from 'react';
import './style.css';
import { Navbar, NavDropdown, Form, Nav, FormControl, Button, Container, Col, Table,ListGroup, Pagination } from 'react-bootstrap'
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';

function Main(props) {
  let history = useHistory();
  let [ page, setPage] = useState(1);
  useEffect(()=>{
    //여기서 반복문으로 숫자 보여줌
  }, [ page ]);
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
        <ListGroup.Item className="flex-fill list wrap-title">Title</ListGroup.Item>
        <ListGroup horizontal className="d-flex justify-content-between list">
          <ListGroup.Item className="user list">User</ListGroup.Item>
          <ListGroup.Item className="date list">Date</ListGroup.Item>
        </ListGroup>
      </ListGroup>
      {
        props.posts.map((post) =>
        {return (
        <ListGroup horizontal className="d-flex justify-content-between lists mt-1" onClick={ () => {history.push(`/posts/${post.number}`)}}>
          <ListGroup.Item className="flex-fill list wrap-title"><p className="title d-block">{post.title}</p></ListGroup.Item>
          <ListGroup horizontal className="d-flex justify-content-between list">
            <ListGroup.Item className="user list">{post.user}</ListGroup.Item>
            <ListGroup.Item className="date list">{post.date}</ListGroup.Item>
          </ListGroup>
        </ListGroup>
        )})
      }
      </div>
      <Pagination className="mt-3 justify-content-center pagination">
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item >{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item >{5}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
      
      </Container>
  );
}

export default Main;