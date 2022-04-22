import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false,
    };

    handleChange = (e) => {
        this.setState({
            password: e.target.value,
        });
    };

    handleButtonClick = (e) => {
        this.setState({
            clicked: true,
            // 검증해줘서 결과가 true 아니면 false로 뜬다
            validated: this.state.password === '0000',
        });
        this.input.focus();
    };

    render() {
        return (
            <div>
                <input
                    // this.input의 input은 class명처럼 아무거나 적어줘도 됨
                    ref={(ref) => (this.input = ref)}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;
