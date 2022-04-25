import React, { useState, useMemo, useCallback, useRef } from 'react';

// useMemo 없이 쓰면 등록 버튼을 누를 때가 아니라 그냥 아무 키를 눌러 입력만 해도 함수가 불필요하게 실행된다
function getAverage(numbers) {
    console.log('평균 계산 중');
    if (numbers.length === 0) return 0;
    // reduce는 나중에 배울 건데 가져와서 합계를 구해준다
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

function Average(props) {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    // 눈으로는 안 보이지만 컴포넌트가 리렌더링될 때마다 새로 만들어진 함수를 사용하고 있다
    // const onChange = (e) => {
    //     setNumber(e.target.value);
    // };

    const onChange = useCallback((e) => {
        setNumber(e.target.value);
    }, []); // 빈 배열은 컴포넌트가 처음 렌더링될 때만 함수를 생성한다는 뜻

    // const onInsert = (e) => {
    //     // concat으로 배열을 합쳐준다. parseInt() 함수는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환합니다. 자바스크립트에서 배웠대,,,
    //     const nextList = list.concat(parseInt(number));
    //     setList(nextList);
    //     setNumber('');
    // };

    const onInsert = useCallback(
        (e) => {
            const nextList = list.concat(parseInt(number));
            setList(nextList);
            setNumber('');
            // current 붙이는 게 중요
            inputEl.current.focus();
        },
        [number, list],
    ); // number 혹은 list가 바뀔 때만 함수를 재생성한다는 뜻

    // 두번째 매개변수가 바뀔 때만 첫번째 매개변수인 함수를 실행시킨다는 뜻
    // () => getAverage(list) 이건 return 생략한 상태,,,,줄여쓰는 거 헷갈려 흑흑
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            {/* 초점 맞춰지길 원하는 곳에 ref 달아주기 */}
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {/* key 있어야 됨!! 어느 파일이었지... */}
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            {/* <div>
                <b>평균값:</b> {getAverage(list)}
            </div> */}
            <div>
                <b>평균값:</b> {avg}
            </div>
        </div>
    );
}

export default Average;
