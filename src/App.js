import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  
  const handleClick = (value) => {
    setInput(input + value);
  };
  
  const handleClear = () => {
    setInput('');
  };
  
  const handleEqual = () => {
    try {
      console.log(input)
      setInput(eval(input));
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick('/')}>÷</button>
        <button onClick={() => handleClick('*')}>×</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={handleEqual}>=</button>
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((num) => (
          <button key={num} onClick={() => handleClick(num.toString())}>{num}</button>
        ))}
      </div>
    </div>
  );
};

export default App;
