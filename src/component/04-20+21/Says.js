import React from 'react';
import { useState } from 'react';

function Says(props) {
    // useState 구조 : const [값, 실행될 함수명] = useState(초깃값)
    // 값이랑 함수명은 내가 쓰고싶은 거 쓰면 됨 함수에 보통 set을 붙인다
    const [message, setMessage] = useState('대기');
    const onClickEnter = () => setMessage('hi');
    const onClickLeave = () => setMessage('bye');
    // setMessage가 실행되면서 hi와 bye를 message에 넣는다

    const [color, setColor] = useState('black');
    // const onClickRed = () => setColor('red');
    // const onClickGreen = () => setColor('green');
    // const onClickBlue = () => setColor('blue');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color }}>{message}</h1>
            {/* inline 스타일로 css 주는 방법 style={안에는 css 문법} */}
            <button style={{ color: 'red' }} onClick={() => setColor('red')}>
                빨간색
            </button>
            <button style={{ color: 'green' }} onClick={() => setColor('green')}>
                초록색
            </button>
            <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
                파란색
            </button>
            {/* 입장퇴장 버튼처럼 위에서 함수를 미리 만들어놓고 리턴에서는 함수명만 써줘도 가능 */}
            {/* <button style={{ color: 'red' }} onClick={onClickRed}>
                빨강
            </button>
            <button style={{ color: 'green' }} onClick={onClickGreen}>
                초록
            </button>
            <button style={{ color: 'blue' }} onClick={onClickBlue}>
                파랑
            </button> */}
        </div>
    );
}

export default Says;
