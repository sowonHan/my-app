import React, { useState } from 'react';

function EventPracticeFunc(props) {
    const [form, setForm] = useState({ username: '', message: '' });

    // 값을 할당
    const { username, message } = form;

    const onChange = (e) => {
        const nextForm = {
            // spread 연산자를 이용해서 기존의 form 복사하고 입력될 때 덮어씌워짐으로써 업데이트됨
            ...form,
            [e.target.name]: e.target.value,
        };
        console.log('nextForm :', nextForm);
        setForm(nextForm);
    };

    const onClick = () => {
        alert(username + ',' + message);
        setForm({
            username: '',
            message: '',
        });
    };

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type="text" name="username" placeholder="사용자명" value={username} onChange={onChange} />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
}

export default EventPracticeFunc;
