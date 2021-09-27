import React, { useState, useEffect } from 'react';
import './style.css';
import { Navbar, NavDropdown, Form, Nav, FormControl, Button, Container, Col, Table,ListGroup, Pagination, Alert } from 'react-bootstrap'
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Write(props) {
  let history = useHistory();
  const [content, setContent] = useState({
    title: '',
    body: ''
  })
  const getValue = e => {
    const { name, value } = e.target;
      console.log(name, value);
      setContent({
        ...content,
        // name 을 그대로 써버리면 (name값) : (value값)이 되는게 아닌 name : (value값) 이 새로 생겨버리기 때문에 구조분해 문법 [name]: value 을 써서 해결함
        [name]: value
      })
      console.log(content);
  };
  return (
    <Container>
      <h2 className="mt-3">Write</h2>
      <div className="mt-2">
        <h4>Title</h4>
        <Form.Control onChange={getValue} name='title' size="lg" type="text" placeholder="Title" />
      </div>
      <div className="mt-2">
        <h4>Body</h4>
        <CKEditor
          editor={ ClassicEditor }
          data=""
          onReady={ editor => {
              // You can store the "editor" and use when it is needed.
              console.log( 'Editor is ready to use!', editor );
          } }
          onChange={ ( event, editor ) => {
              const data = editor.getData();
              console.log({ event, editor, data });
              setContent({
                ...content,
                body: data
              })
              console.log(content);
          } }
          /* onBlur={ ( event, editor ) => {
              console.log( 'Blur.', editor );
          } }
          onFocus={ ( event, editor ) => {
              console.log( 'Focus.', editor );
          } }  */
        /> 
      </div>
      <div align="right" className="mt-3">
        <Button variant="primary" type="button" onClick={() => {
          console.log(JSON.stringify(content))
          axios.post("url", JSON.stringify(content), {
            headers: { "Content-Type": `application/json`}
              }
          ).then((res) => {
            console.log(res);
          }).catch(() => {
          })
        }}>
          Submit
        </Button>
      </div>
    </Container>
  );
}


export default Write;