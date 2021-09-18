import React, { useState } from 'react';
import './App.css';


/*
컴포넌트 설명
props 설명
request: 서버에서 값을 받아오는 함수(promise문 리턴함)
success: request가 성공했을 때 실행 될 함수
failure: request가 실패했을 때 실행 될 함수
loading: 로딩중 나타날 글자
unLoading : 로딩중이 아닐 때 나타날 글자
*/

function LoadingBtn(props) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      props.request()
      .then((result) => {
        props.success(result);
        setLoading(false);
      })
      .catch(() => {
        props.failure(result);
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
