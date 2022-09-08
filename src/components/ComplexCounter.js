import { useReducer } from 'react';

const initialState = {
    counter: 0,
    counter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
          return { counter: state.counter + action.value };
    case 'decrement':
          return { counter: state.counter - action.value };
    case 'increment2':
          return { ...state, counter2: state.counter2 + action.value };
    case 'decrement2':
          return { ...state, counter2: state.counter2 - action.value };
    default:
          return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

    return (
      <div>
       <div>
        <div>Count: {count.counter}</div><br />
          <button type="button" onClick={() =>
              dispatch({
                  type: 'increment',
                  value: 1
              })
          }>
              Increment by 1
          </button> <br /><br />
          <button type="button" onClick={() =>
              dispatch({
                  type: 'increment',
                  value: 5
              })
          }>
              Increment by 5
         </button><br /><br />
          <button type="button" onClick={() =>
              dispatch({
                  type: 'decrement',
                  value: 1
              })
          }>
              Decrement by 1
          </button><br /><br />
          <button type="button" onClick={() =>
              dispatch({
                  type: 'decrement',
                  value: 5
              })
          }>
              Decrement by 5
         </button>
         <div>Count-2: {count.counter2}</div><br />
          <button type="button" onClick={() =>
              dispatch({
                  type: 'increment2',
                  value: 1
              })
          }>
              Increment2 by 1
          </button> <br /><br />
          <button type="button" onClick={() =>
              dispatch({
                  type: 'increment2',
                  value: 5
              })
          }>
              Increment2 by 5
         </button><br /><br />
          <button type="button" onClick={() =>
              dispatch({
                  type: 'decrement2',
                  value: 1
              })
          }>
              Decrement2 by 1
          </button><br /><br />
          <button type="button" onClick={() =>
              dispatch({
                  type: 'decrement2',
                  value: 5
              })
          }>
              Decrement2 by 5
         </button>
     </div>
     </div>
  );
}

export default Counter;