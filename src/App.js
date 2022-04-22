// 4월 20일
// import { Fragment } from 'react';

// 4월 20일
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
//     return <MyComponentFunc name="react" number={1} />;
// }
// function App() {
//     // <MyComponentFunc></MyComponentFunc>를 쓰면 그 안의 콘텐츠가 children으로 들어온다
//     return <MyComponentClass name="라랄">리액트</MyComponentClass>;
//     // PropTypes.string으로 했을 때 name={3}을 넣으면 문자열이 아니므로 콘솔에 에러가 난다
// }
// function App() {
//     return <Counter />;
// }

// 4월 22일
// function App() {
//     return <EventPracticeFunc />;
// }
// import { Component } from 'react';
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
//                 {/* ref를 이용하면 부모인 App에서 자식인 ScrollBox의 함수를 가져다쓸 수 있다 */}
//                 <button onClick={() => this.scrollBox.scrollToBottom}>맨 밑으로</button>
//             </div>
//         );
//     }
// }
// function App() {
//     return <IterationSample />;
// }
import LifeCycleSample from './component/04.22/LifeCycleSample';
import { Component } from 'react';

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
    state = {
        color: '#000000',
    };

    handleClick = () => {
        this.setState({
            color: getRandomColor(),
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>랜덤 색상</button>
                {/* color={this.state.color} 이게 props */}
                <LifeCycleSample color={this.state.color}></LifeCycleSample>
            </div>
        );
    }
}

export default App;
