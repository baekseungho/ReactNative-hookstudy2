import { useState, useEffect } from "react";

export const RequestApi = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const [inProg, setInProg] = useState(false);

  useEffect(
    () => {
      // useEffect에 비동기함수가 들어올경우 경고메시지가 뜨는데 이를 없에기위해 함수로 감싸준다
      const RequestData = async () => {
        try {
          setInProg(true);
          const res = await fetch(url);
          const result = await res.json();
          if (res.ok) {
            setData(result);
            setError(null);
          } else {
            throw result;
          }
        } catch (error) {
          setError(error);
        } finally {
          setInProg(false);
        } //finally : 문제가 있던 없던 실행
      };
      RequestData();
    },
    [] //조건 , 마운트했을떄,
  );

  return { data, error };
};

// fetch("https://jsonplaceholder.typicode.com/post/1")
// .then((respose) =>Response.json()).then((data)=> console.log(data)); //자바스크립트 객체 형식으로 변환된다.
