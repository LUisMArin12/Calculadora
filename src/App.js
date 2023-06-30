import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result + e.target.name);
  };

  const calculate = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult('Error');
    }
  };

  const reset = () => {
    setResult('');
  };

  return (
    <div className="container">
      <h1>Calculadora</h1>
      <div className="calculator">
        <input type="text" value={result} readOnly />
        <div className="keypad">
          <div className="row">
            <button className="btn btn-light col" name="7" onClick={handleClick}>
              7
            </button>
            <button className="btn btn-light col" name="8" onClick={handleClick}>
              8
            </button>
            <button className="btn btn-light col" name="9" onClick={handleClick}>
              9
            </button>
            <button className="btn btn-light col" name="/" onClick={handleClick}>
              /
            </button>
          </div>
          <div className="row">
            <button className="btn btn-light col" name="4" onClick={handleClick}>
              4
            </button>
            <button className="btn btn-light col" name="5" onClick={handleClick}>
              5
            </button>
            <button className="btn btn-light col" name="6" onClick={handleClick}>
              6
            </button>
            <button className="btn btn-light col" name="*" onClick={handleClick}>
              *
            </button>
          </div>
          <div className="row">
            <button className="btn btn-light col" name="1" onClick={handleClick}>
              1
            </button>
            <button className="btn btn-light col" name="2" onClick={handleClick}>
              2
            </button>
            <button className="btn btn-light col" name="3" onClick={handleClick}>
              3
            </button>
            <button className="btn btn-light col" name="-" onClick={handleClick}>
              -
            </button>
          </div>
          <div className="row">
            <button className="btn btn-light col" name="0" onClick={handleClick}>
              0
            </button>
            <button className="btn btn-light col" name="." onClick={handleClick}>
              .
            </button>
            <button className="btn btn-light col" name="+" onClick={handleClick}>
              +
            </button>
            <button className="btn btn-danger col" onClick={reset}>
              Limpiar
            </button>
          </div>
          <div className="row">
            <button className="btn btn-light col-12" name="=" onClick={calculate}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
