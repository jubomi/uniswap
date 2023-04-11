// src/Counter.jsx
import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);

  const plusNum = (e) => {
    setNumber(preNum => preNum + 1)
  }
  const minusNum = (e) => {
    setNumber(preNum => preNum - 1)
  }

  return (
    <div>
      <button type="button" onClick={plusNum}>+</button>
      <span> {number} </span>
      <button type="button" onClick={minusNum}>-</button>
    </div>
  );
};

export default Counter;