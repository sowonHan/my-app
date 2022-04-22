import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class MyComponentFunc extends Component {
    // 정적 함수
    // 클래스 내부에 지정
    static defaultProps = {
        name: '디폴트 이름',
    };
    static propTypes = {
        name: PropTypes.string,
    };

    render() {
        const { name, children } = this.props;
        return (
            <div>
                안녕하세요 제 이름은 {name} 입니다. <br />
                children 값은 {children} 입니다.
            </div>
        );
    }
}

export default MyComponentFunc;
