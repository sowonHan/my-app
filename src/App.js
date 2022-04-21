// 4월 20일 코드
// import { Fragment } from 'react';
// import StartClass from './component/StartClass';
// import StartFunc from './component/StartFunc';

// 4월 21일
// import MyComponent from './component/MyComponent';
// import MyComponentFunc from './component/MyComponentFunc';
// import Counter from './component/Counter';
// import Says from './component/Says';
import EventPractice from './component/04-20+21/EventPractice';

// 4월 20일 코드
// function App() {
//     return (
//         // JSX는 감싸주는 태그가 있어야 그려진다
//         // <Fragment> 대신에 <> </>로 감싸도 됨
//         <Fragment>
//             <StartClass />
//             <StartFunc />
//         </Fragment>
//     );
// }

// 4월 21일
// function App() {
//     // 속성과 속성값 주듯이 입력하면 props로 들어간다. 문자는 따옴표로, 숫자는 중괄호 안에 입력
//     return <MyComponent name="react" number={1} />;
// }
// function App() {
//     // <MyComponent></MyComponent>를 쓰면 그 안의 콘텐츠가 children으로 들어온다
//     return <MyComponentFunc name="라랄">리액트</MyComponentFunc>;
//     // PropTypes.string으로 했을 때 name={3}을 넣으면 문자열이 아니므로 콘솔에 에러가 난다
// }
// function App() {
//     return <Counter />;
// }
// function App() {
//     return <Says />;
// }

function App() {
    return <EventPractice />;
}

export default App;
