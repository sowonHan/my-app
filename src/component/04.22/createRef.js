import React, { Component } from 'react';

class createRef extends Component {
    // input에 함수를 할당
    input = React.createRef();
    handleFocus = () => {
        this.input.current.focus();
    };

    render() {
        return (
            <div>
                <input ref={this.input} />
            </div>
        );
    }
}

export default createRef;
