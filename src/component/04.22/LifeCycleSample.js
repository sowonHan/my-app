import React, { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    };

    myRef = null;

    // constructor : 컴포넌트를 만들 때 처음 실행. 초기 state를 정할 수 있다
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    // props에서 받아온 값을 state에 동기화시키는 기능. 두번째로 실행
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps', nextProps, prevState);
        // props에서 받아온 색이 현재(이전) state의 색과 일치하지 않으면, state의 color를 새로운 값인 props 색으로 리턴시켜라
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color };
        }
        // state를 변경할 필요가 없다면 null을 리턴시키면 된다. 현재 그대로 유지
        return null;
    }

    // did는 렌더된 후에 작동되는 것
    // componentDidMount : 최초로 사이트에 들어와 첫 렌더링을 마친 후 실행되는 것. 다른 라이브러리나 프레임워크의 함수를 호출하거나 이벤트를 등록하거나 네트워크 비동기 작업(axios, fetch 등)을 한다
    componentDidMount() {
        console.log('componentDidMount');
    }

    // update니까 말 그대로 업데이트될 때 실행
    // shouldComponentUpdate : 렌더하기 전에 업데이트해도 되냐고 묻는 것. true/false로 나뉘는데 업데이트가 true일 때 리렌더링, false면 거기서 중지. 기본은 true
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        // 숫자의 마지막 자리가 4면 리렌더링하지 않음
        return nextState.number % 10 !== 4;
    }

    // will은 렌더되기 직전에 작동할 것이다
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1,
        });
    };

    // 실제로 화면에 렌더링되기 전에 실행. 주로 업데이트되기 직전의 값을 참고할 때 사용
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate', prevProps, prevState);
        // 색이 변할 때 h1에 리턴시킴으로써 눈으로 색을 볼 수 있게 해주는 것
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    // 제일 마지막에 실행. getSnapshotBeforeUpdate 값을 snapshot에 그대로 가져올 수 있다
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        if (snapshot) {
            console.log('업데이트가 되기 직전 색상: ', snapshot);
        }
    }

    // render(그려주기) : props와 state에 접근
    render() {
        console.log('render');

        const style = {
            color: this.props.color,
        };

        return (
            <div>
                <h1 style={style} ref={(ref) => (this.myRef = ref)}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        );
    }
}

export default LifeCycleSample;
