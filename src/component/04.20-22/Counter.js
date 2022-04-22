import React, { Component } from 'react';

class Counter extends Component {
    // 생성자: 객체가 생성될 때 생성되는 것
    // constructor(props) {
    //     // Component에서 쓰는 거라 constructor 쓸 때 꼭 같이 써줘야함
    //     super(props);
    //     // 컴포넌트 내부에서 쓸 최초의 데이터를 정의
    //     this.state = {
    //         number: 0,
    //         fixedNumber: 0,
    //     };
    // }

    state = {
        number: 0,
        fixedNumber: 0,
    };

    render() {
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    onClick={() => {
                        // this.setState({ number: number + 1 });

                        // 여러 개 더하고 싶을 때는 매개변수를 객체가 아닌 함수로 작성해야 한다
                        // this.setState((prevState) => {
                        //     console.log(prevState);
                        //     return {
                        //         number: prevState.number + 1,
                        //     };
                        // });

                        // 리턴 생략해서 쓸 때는 아래와 같이 함수 괄호를 중괄호 대신 소괄호를 이용해서 return중괄호를 감싸고 return글자를 생략한다
                        // this.setState((prevState) => ({ number: prevState.number + 1 }));

                        // 콜백함수 넣기
                        this.setState(
                            {
                                number: number + 1,
                            },
                            () => {
                                console.log('this.state:', this.state);
                            },
                        );
                    }}
                >
                    더하기 1
                </button>
            </div>
        );
    }
}

export default Counter;
