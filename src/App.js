import React from "react";
import { useSelector } from "react-redux"; // import 해주세요.
import { useDispatch } from "react-redux";

import { minusOne, plusOne } from "./redux/modules/counter";

const App = () => {
  const dispatch = useDispatch(); // dispatch 함수 생성. 액션 객체를 리듀서로 보내는 '전달자'함수.
  const number = useSelector((state) => state.counter.number); //리덕스 스토어를 조회. 화살표 함수에서 꺼낸 state라는 인자는 현재 프로젝트에 존재하는 모든 리덕스 모듈의 state 
  // console.log(number);
  return (
    <div>
      {number}
      <button
				// 이벤트 핸들러 추가
        onClick={() => {
					// 마우스를 클릭했을 때 dispatch가 실행되고, ()안에 있는 액션객체가 리듀서로 전달된다.
          dispatch(plusOne()); 
        }}
      >
				+ 1
      </button>

      <button
        onClick={() => {
					// 액션객체 디스패치
          dispatch(minusOne());
        }}
      >
        - 1
      </button>
    
    </div>
  );
};


export default App;