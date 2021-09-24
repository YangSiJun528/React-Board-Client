import React, { useState, useEffect } from 'react';
import './style.css';
import { Navbar, NavDropdown, Form, Nav, FormControl, Button, Container, Col, Table,ListGroup, Pagination } from 'react-bootstrap'
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';

function Main(props) {
  let history = useHistory();
  let [ posts, setPosts ] = useState({});
  let [ limit, setLimit ] = useState(13);
  // 0부터 끝 -1 까지
  let [ currentPage, setCurrentPage ] = useState(0);
  let [ totalPage , setTotalPage ] = useState(30);
  let [ page , setPage ] = useState([]);
  const nextPage = () => {

  }
  // const nextPage = () => {}
  // const nextPage = () => {}
  // const nextPage = () => {}
  const handlePageChange = (i) => {
    console.log(i+1)
    axios.get(`/?limit=${limit}&page=${i * limit}`)
    .then((result) => {
      setPosts(result.currentPagePosts)
    })
    .catch();
    setCurrentPage(i)
  }
  const handlePageLoading = () => {
    axios.get(`/page`)
    .then((result) => {
      setTotalPage(Math.ceil(parseInt(result.totalPostsNum)));
      setPosts(result.currentPagePosts)
      setPage(pagination(totalPage, currentPage))
    })
    .catch();
    setCurrentPage(0)
  }
  useEffect(()=>{
    setPage(pagination(totalPage, currentPage))
    // 현재 페이지 바뀔 때마다 실행
  }, [ currentPage ]);
  useEffect(()=>{
    handlePageLoading()
  }, [ ]);
  function pagination(totalPage, currentPage) {
    let num = 0;
    let forArray = [];
    if (totalPage - currentPage < 5 && currentPage/5*5 == totalPage/5*5) 
      num = totalPage - currentPage;
    else 
      num = 5;
    for (let i = 0; i < num; i++) {
      forArray.push((parseInt(currentPage/5))*5+i)
    }
    return forArray;
}
  return (
    <Container className="container">
      <Form className="d-flex mb-3">
        <select class="form-select select" aria-label="Default select example">
          <option value="1">전체</option>
          <option value="2">제목</option>
          <option value="3">유저</option>
        </select>
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
        posts !== null &&
        //나중에는 비동기로 받아오는걸로 바꿀거임 props.posts. > posts. 로 바꾸기
        props.posts.map((post) =>
        {return (
        <ListGroup horizontal className="d-flex justify-content-between lists mt-1" onClick={ () => {history.push(`/post/${post.post_id}`)}}>
          <ListGroup.Item className="flex-fill list wrap-title"><p className="title d-block">{post.title}</p></ListGroup.Item>
          <ListGroup horizontal className="d-flex justify-content-between list">
            <ListGroup.Item className="user list">{post.user}</ListGroup.Item>
            <ListGroup.Item className="date list">{post.date}</ListGroup.Item>
          </ListGroup>
        </ListGroup>
        )})
      }
      </div>
      {
      // DB에 있는 게시물 수 계산해서 보여줌 (하나밖에 없으면 하나만 나옴 최대 5개)
      }<Button variant="primary writeBtn" onClick={ () => {history.push(`/write`)}}>Write</Button>
      <Pagination className="mt-3 justify-content-center pagination">
        <Pagination.First onClick={()=>{handlePageChange(0)}}/>
        <Pagination.Prev onClick={()=>{
          console.log((((currentPage/5))*5-1))
          handlePageChange(((currentPage/5))*5-1)
          }}/>
        {
          page.map((i) =>  {
            let active = null
            currentPage == i 
            ? active = "active"
            : active = null
            return <Pagination.Item key={i} className={active} onClick={()=>{handlePageChange(i)}}>{i+1}</Pagination.Item>
          })
        }
        <Pagination.Next onClick={()=>{handlePageChange(((currentPage/5))*5+1)}}/>
        <Pagination.Last onClick={()=>{handlePageChange(totalPage-1)}}/>
      </Pagination>
      </Container>
  );
}

export default Main;