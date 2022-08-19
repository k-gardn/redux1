//액션 value를 상수들로 만들어 줍니다. 보통 이렇게 한곳에 모여있습니다.
const PLUS_ONE ="PLUS_ONE"
const MINUS_ONE = "MINUS_ONE"

// 추가된 코드 👇 - Action Creator를 만들어 줍니다. 
export const plusOne = () => {
    return{
        type: PLUS_ONE,
    }
}

export const minusOne = () => {
    return{
        type: MINUS_ONE,
    }
}


//초기 상태값 // 객체{}안의 number라는 변수의 초기값을 0으로 설정.
const initialState = {
    number: 0,
};

// 리듀서(변화를 일으키는 함수) useState의 setNumber와 같은 역할.
const counter = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case PLUS_ONE:
            return {
                number: state.number +1,
            }
        
        case MINUS_ONE:
            return {
                number: state.number -1,
            };

        default:
        return state;
    }
  };
  
  // 모듈파일에서는 리듀서를 export default 한다.
  export default counter;