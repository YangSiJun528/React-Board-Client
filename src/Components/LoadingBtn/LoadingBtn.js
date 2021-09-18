import React, { useState, useEffect } from 'react';
import { Navbar, NavDropdown, Form, Nav, FormControl, Button, Container, Col, Table,ListGroup, Pagination, Alert } from 'react-bootstrap'

/*
컴포넌트 설명
props 설명
request: 서버에서 값을 받아오는 함수(promise문 리턴함)
success: request가 성공했을 때 실행 될 함수, request의 result를 인자로 받음 (리턴 X)
failure: request가 실패했을 때 실행 될 함수 (리턴 X)
loading: 로딩중 나타날 String
unLoading : 로딩중이 아닐 때 나타날 String
*/

/*
컴포넌트 설명
props 설명
request: 서버에서 값을 받아오는 함수(promise문 리턴함)
result: setstate함수(state바꾸는거)를 받아서 결과를 리턴함 (Object로 success: result, failure: null)
loading: 로딩중 나타날 String
unLoading : 로딩중이 아닐 때 나타날 String
*/

function LoadingBtn(props) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      props.request()
      .then((result) => {
        props.setResult({success: result});
      })
      .catch(() => {
        props.setResult({failure: null});
      })
      .finally(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? props.loading : props.unLoading }
    </Button>
  );
}

export default LoadingBtn;
