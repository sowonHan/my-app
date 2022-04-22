import React from 'react';
import { PropTypes } from 'prop-types';

// const MyComponent = (props) => {
//     // 콘솔에 찍어보면 props도 객체 데이터임을 알 수 있다
//     return (
//         <div>
//             안녕하세요 제 이름은 {props.name} 입니다. <br />
//             children 값은 {props.children} 입니다.
//         </div>
//     );
// };

// function MyComponent(props) {
//     // return 한 줄이면 괄호 없이 바로 붙여도 되는...이거 자바스크립트에서 배우긴 한 듯
//     return <div>안녕하세요 제 이름은 {props.name} 입니다.</div>;
// }

const MyComponent = (props) => {
    // 비구조화 할당 문법
    const { name, children } = props;
    return (
        <div>
            안녕하세요 제 이름은 {name} 입니다. <br />
            children 값은 {children} 입니다.
        </div>
    );
};

MyComponent.defaultProps = {
    name: '디폴트 이름',
};

MyComponent.propTypes = {
    name: PropTypes.string,
};

export default MyComponent;
