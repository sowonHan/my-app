import React from "react";

// 함수로 만드는 컴포넌트
// 얘는 render 안 씀

// ES5 방식
// function StartFunc() {
//     return(
//         <div>
//             <h1>function 컴포넌트</h1>
//             <p>html 적용하기</p>
//         </div>
//     )
// }

// ES6 방식
const StartFunc = () => {
    return(
        <div>
            <h1>function 컴포넌트</h1>
            <p>html 적용하기</p>
        </div>
    )
}

export default StartFunc;