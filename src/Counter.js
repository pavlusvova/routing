import React, {useReducer} from 'react';
import './App.css';
import reducer from './reducer';

function Counter() {
  const [state] = useReducer(reducer, JSON.parse(localStorage.getItem("state")))
  return (
      <div>
        <h1>Товарів в магазині: {state.shops.length} </h1>
      </div>
  );
}

export default Counter;
