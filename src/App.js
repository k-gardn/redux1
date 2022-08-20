import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNumber } from "./redux/modules/counter";
import { minusNumber } from "./redux/modules/counter";

const App = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);

  const globalNumber = useSelector((state) => state.counter.number);
  
  const onChangeHandler = (event) => {

    const { value } = event.target; //객체 구조 분해 할당. 우측은 분해하고자 하는 객체, 좌측엔 상응하는 객체 프로퍼티의 '패턴'을 넣음.
    // console.log(event.target); //<input type="number">
		// event.target.value는 문자열 입니다.
		// 이것을 숫자형으로 형변환해주기 위해서 +를 붙여 주었습니다.
    setNumber(+value);
  };

  const onClickAddNumberHandler = () => {
		// 5. Action creator를 dispatch 해주고, 그때 Action creator의 인자에 number를 넣어줍니다.
    dispatch(addNumber(number));
  };

  const onClickMinusNumberHandler =() => {
    dispatch(minusNumber(number));
  }

  return (
    <div>
      <div>{globalNumber}</div>
      <input type="number" onChange={onChangeHandler} />
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinusNumberHandler}>빼기</button>
    </div>
  );
};

export default App;