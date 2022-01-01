import PropsBox1 from "./Components/Props/PropsBox1";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { plus, minus } from "./Components/modules/counter";
import ReduxBox1 from "./Components/Redux/ReduxBox1";
import { BackDiv, StartPropsBox, StartReduxBox } from "./Components/Presenter/StartBoxAndDiv";

function App() {
  const [count, setCount] = useState(0); //props

  const dispatch = useDispatch(); //Redux

  const plusOrMinus = (e) => {
    if (e.target.innerText === '+') {
      setCount(count + 1); //props

      dispatch(plus()); //Redux
    }
    else {
      setCount(count - 1); //Props

      dispatch(minus()); //Redux
    }
  }

  return (
    <BackDiv>
      <StartPropsBox>
        props
        <PropsBox1 props={count} />
      </StartPropsBox>

      <StartReduxBox>
        redux
        <ReduxBox1 />
      </StartReduxBox>
      <button onClick={plusOrMinus}>+</button>
      <button onClick={plusOrMinus}>-</button>
    </BackDiv>
  );
}

export default App;
