import { useState, useReducer } from "react";
import classes from "./Count.module.css"

const ACTIONS = {
  INCREMENT: "increament",
  DECREMENT: "decrement"
}

function reducer(state, action){
   switch(action.type) {
    case ACTIONS.INCREMENT: return {count: state.count + 1};
    case ACTIONS.DECREMENT: return {count: state.count - 1};
    default: return state;
   };
};

function Count() {
  const [countState, dispatch] = useReducer(reducer, { count: 0 })

  // const [count, setCount] = useState(0)

  const increment = () => {
    dispatch({type: ACTIONS.INCREMENT})
    // setCount(prevCount => prevCount + 1)
  }

  const decrement = () => {
    dispatch({type: ACTIONS.DECREMENT})
    // setCount(prevCount => prevCount - 1)

  }

  return (
    <div className={classes.Count}>
    <button onClick={decrement}>-</button>
    <span>{countState.count}</span>
    <button onClick={increment}>+</button>
    </div>
  );
}

export default Count;
