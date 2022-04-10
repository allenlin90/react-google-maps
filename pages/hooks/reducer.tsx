import { NextPage } from 'next';
import { Dispatch, useReducer, useState } from 'react';

interface InitialState {
  count: number;
  showText: boolean;
}

const initialState: InitialState = {
  count: 0,
  showText: true,
};

enum ReducerTypes {
  INCREMENT = 'INCREMENT',
  toggleShowText = 'toggleShowText',
}

interface Dispatcher {
  type: ReducerTypes;
}

const reducer = (state: InitialState, action: Dispatcher): InitialState => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'toggleShowText':
      return { ...state, showText: !state.showText };
    default:
      // throw new Error('invalid type or payload to dispatch')
      return state;
  }
};

export const Reducer: NextPage = () => {
  // const [count, setCount] = useState(0);
  // const [showText, setShowText] = useState(true);

  const [{ count, showText }, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          // setCount(count + 1);
          // setShowText(!showText);
          dispatch({ type: 'INCREMENT' as ReducerTypes });
          dispatch({ type: 'toggleShowText' as ReducerTypes });
        }}
      >
        Click Here
      </button>

      {showText && <p>This is a text</p>}
    </>
  );
};
export default Reducer;
