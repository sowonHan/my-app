import React, { useState } from 'react';

function IterationSample(props) {
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' },
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        // 리액트의 특징인 불변성 유지 : 기존 상태를 그대로 두면서 새로운 값으로 데이터를 변경 (그래서 concat, map, filter를 사용하는 것)
        const nextNames = names.concat({
            id: nextId,
            text: inputText,
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };

    const onRemove = (id) => {
        // 더블클릭한 목록의 id(예를 들어 얼음을 클릭했다면 2)가 name.id와 일치하지 않아야 true가 되어 nextNames에 들어간다. 나머지 눈사람, 눈, 바람은 각각 1,3,4니까 더블클릭한 2와 일치하지 않아서 참으로서 들어가게 된다. 반면에 얼음의 id는 더블클릭한 2와 일치하니까 거짓으로서 걸러지게 되며 이로 인해 지워진 것처럼 보이게 된다!
        const nextNames = names.filter((name) => name.id !== id);
        setNames(nextNames);
    };

    // 배열을 렌더링할 때는 빨리 찾는 색인 개념으로 고유의 값인 key가 필요함
    const nameList = names.map((name, index) => (
        <li
            key={name.id}
            onDoubleClick={() => {
                onRemove(name.id);
            }}
        >
            {name.text}
        </li>
    ));

    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>;
        </>
    );
}

// 보여줄 땐 map, 합칠 때는 concat, 제거할 때는 filter

export default IterationSample;
