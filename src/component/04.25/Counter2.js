import React, { useReducer } from 'react';

function reducer(state, action) {
    // 확장된 문법인 JSX에서는 switch문 쓸 때 case 사이에 break가 없어도 무관하게 되었다
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default:
            return state;
    }
}

function Counter2(props) {
    // [현재 가리키는 상태(데이터),액션을 발생시키는 함수] = useReducer(리듀서 함수, 리듀서 함수의 기본값)
    const [state, dispatch] = useReducer(reducer, { value: 0 });

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b>입니다.
            </p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
        </div>
    );
}

export default Counter2;
