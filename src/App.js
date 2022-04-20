import { Fragment } from "react";
import StartClass from "./component/StartClass";
import StartFunc from './component/StartFunc';

function App() {
  return (
    // JSX는 감싸주는 태그가 있어야 그려진다
    // <Fragment> 대신에 <> </>로 감싸도 됨
    <Fragment>
    <StartClass />
    <StartFunc />
    </Fragment>
  );
}

export default App;
