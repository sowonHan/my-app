import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        message: '',
        username: '',
    };

    // 함수를 따로 뺄 경우 바인드를 해야 연결이 된다
    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }
    // handleChange(e) {
    //     this.setState({
    //         message: e.target.value,
    //     });
    // }
    // handleClick(e) {
    //     this.setState({
    //         message: '',
    //     });
    // }

    // 바인드하지 않고 쓰는 방법. 가장 편하고 가독성이 좋다. 밑에 dom은 동일함
    // handleChange = (e) => {
    //     this.setState({
    //         message: e.target.value,
    //     });
    // };
    // handleClick = () => {
    //     alert(this.state.message);
    //     this.setState({
    //         message: '',
    //     });
    // };

    handleChange = (e) => {
        this.setState({
            // input이 여러 개면 하나하나 다 message: e.target.value처럼 입력할 수 없다. 이거 하나만 있으면 username와 message 전부 다룰 수 있음
            [e.target.name]: e.target.value,
        });
    };
    handleClick = () => {
        alert(this.state.message + ',' + this.state.username);
        this.setState({
            message: '',
            username: '',
        });
    };
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    };

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                {/* <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력"
                    value={this.state.message}
                    // 리액트에서 이벤트를 전달할 때는 객체로 한다. 그리고 DOM에서만 이벤트 만들 수 있음. APP에서 컴포넌트 옆에는 못함
                    // onChange={(e) => {
                    //     this.setState({
                    //         // e.target.value = 해당 값
                    //         message: e.target.value,
                    //     });
                    // }}

                    // 함수 밖으로 따로 뺐을 경우
                    onChange={this.handleChange}
                /> */}

                <input
                    type="text"
                    name="username"
                    placeholder="사용자명"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;
