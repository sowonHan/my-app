import React, { useReducer } from 'react';

function reducer(state, action) {
    console.log(state);
    console.log(action.name, action.value);
    return {
        ...state, // 데이터 불변성 유지
        [action.name]: action.value,
    };
}

function InfoReducer(props) {
    const [state, dispatch] = useReducer(reducer, { name: '', nickname: '' });
    const { name, nickname } = state;

    const onChange = (e) => {
        console.log(e.target);
        dispatch(e.target);
    };

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );
}

export default InfoReducer;
