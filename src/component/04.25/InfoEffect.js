import React, { useState, useEffect } from 'react';

function InfoEffect(props) {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    // useEffect(() => {
    //     console.log('렌더링이 완료되었습니다.');
    //     console.log({
    //         name,
    //         nickname,
    //     });
    // });
    // 이거는 글자를 입력할 때마다 리렌더링되면서 계속 실행됨

    // useEffect를 처음 렌더링될 때만 실행시키고 싶은 경우 2번째 매개변수에 빈 배열을 넣어주면 된다
    // useEffect(() => {
    //     console.log('렌더링이 완료되었습니다.');
    //     console.log({
    //         name,
    //         nickname,
    //     });
    // }, []);

    /* 특정한 값이 바뀔 때만 useEffect를 실행시키고 싶은 경우엔 배열에 해당 값을 넣어주면 된다.
    여러 값을 넣고 싶을 때는 배열 안에서 'name, nickname' 이런 식으로 ,로 이어나가면 됨
    class의 라이프 사이클에서는 componentDidUpdate가 하던 기능 */
    // useEffect(() => {
    //     console.log('렌더링이 완료되었습니다.');
    //     console.log(name);
    // }, [name]);

    /* 뒷정리(cleanup) : 언마운트되기 전이나 업데이트되기 직전에 어떤 작업을 수행하고 싶을 경우
    ex] 첫 렌더링에선 'effect 빈문자-> cleanup 빈문자-> effect 빈문자' 이렇게 출력. 이름 란에 ㄴ을 입력하면 콘솔에 effect와 변경된 name ㄴ까지만 우선 뜬다. 그 후 추가로 ㅏ를 입력하면 'cleanup ㄴ effect 나' 이렇게 출력된다. cleanup에서는 업데이트 되기 전의 name 값이 남는 걸 알 수 있다!
    라이프사이클에서 componentWillUnmount의 기능
    (언마운트)사라질 때만 실행시키고 싶으면 빈 배열로 해주면 된다 */
    useEffect(() => {
        console.log('effect');
        console.log(name);
        // 클린업 실행
        return () => {
            console.log('cleanup');
            console.log(name);
        };
    }, [name]);

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
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

export default InfoEffect;
