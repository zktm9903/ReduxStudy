# 리덕스 정리

리덕스는 상태 관리 라이브러리이다.
  
- 리덕스의 탄생이유
  - 앱이 커지면 커질수록 기존에 사용하던 방식인 props를 넘겨주는 것으로는 관리를 하기 힘들어짐
  - 컴포넌트 바깥 즉 전역에서 상태를 관리하자는 개념에서 출발함

![redux](https://media.vlpt.us/images/dongha1992/post/baf07786-6f96-4c3a-bd0d-a3f22aead76c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-12-13%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%201.36.52.png)

- 리덕스 기본 개념

  1. components에서 Action을 생성
  2. 생성한 Action을 Dispatch함수로 실행
  3. store에서 해당 reducer로 매치되는 Action이 있는지 확인
  4. store 상태 변경
   
![redux](https://image.toast.com/aaaabcy/post/1598521393339redux.png)
   
- 리덕스의 3가지 규칙
  1. 하나의 어플리케이션 안에는 하나의 스토어가 존재
      - 여러개의 스토어를 사용하는 것이 가능하지만 권장하지 않음
  2. 상태는 읽기 전용
      - 상태를 업데이트 할 때는 불변성을 유지시켜야 함
  3. 변화를 일으키는 함수, 리듀서는 순수한 함수여야 함
      - 리듀서 함수는 이전 상태와 액션을 파라미터로 받음
      - 이전의 상태는 건드리지 않고 변화가 있는 새로운 객체를 만들어서 반환
      - 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과값을 반환

# 리덕스 사용법
counter.js
```jsx
//액션 타입
const PLUS = 'PLUS';
const MINUS = 'MINUS';

//액션 생성 함수
export const plus = () => ({
    type: PLUS,
})
export const minus = () => ({
    type: MINUS,
})

//초기 상태
const initialState = {
    count: 0,
}

//리듀서 함수
export default function counter(state = initialState, action) {
    switch (action.type) {
        case PLUS:
            return {
                count: state.count + 1,
            }
        case MINUS:
            return {
                count: state.count - 1,
            }
        default:
            return state
    }
}
```

index.js
```jsx
import { createStore } from 'redux';
import counter from './Components/modules/counter';
import { Provider } from 'react-redux';

const store = createStore(counter);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
```

App.js
```jsx
import { useDispatch } from "react-redux";
import { plus, minus } from "./Components/modules/counter";

function App() {
  const dispatch = useDispatch();

  const plusOrMinus = (e) => {
    if (e.target.innerText === '+') {
      dispatch(plus());
    }
    else {
      dispatch(minus());
    }
  }

  return (
    <BackDiv>
      <StartReduxBox>
        <ReduxBox1 />
      </StartReduxBox>
      <button onClick={plusOrMinus}>+</button>
      <button onClick={plusOrMinus}>-</button>
    </BackDiv>
  );
}

export default App;
```

ReduxBox3.js
```jsx
import { useSelector } from "react-redux";

const ReduxBox3 = () => {
    const store = useSelector(state => state);

    return (
        <Box>{store.count}</Box>
    )
}

export default ReduxBox3;
```