import React, { useState } from 'react';

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState(''); // Stores the current input

  // Handle button clicks (numbers and operators)
  const handleInput = (value) => {
    setCurrentValue((prev) => prev + value);
  };

  // Calculate the result
  const calculateResult = () => {
    try {
      // Evaluate the mathematical expression
      setCurrentValue(eval(currentValue).toString());
    } catch (error) {
      setCurrentValue('Error'); // Handle invalid expressions
    }
  };

  // Clear the display
  const clearDisplay = () => {
    setCurrentValue('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Simple Calculator</h1>
      <div
        style={{
          width: '300px',
          margin: '0 auto',
          padding: '10px',
          border: '1px solid #ddd',
          borderRadius: '5px',
        }}
      >
        {/* Display */}
        <div
          style={{
            backgroundColor: '#f0f0f0',
            padding: '10px',
            fontSize: '1.5rem',
            marginBottom: '10px',
            textAlign: 'right',
            borderRadius: '3px',
          }}
        >
          {currentValue || '0'}
        </div>

        {/* Buttons */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '5px',
          }}
        >
          {/* Numbers and Operators */}
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map(
            (btn) => (
              <button
                key={btn}
                onClick={() => (btn === '=' ? calculateResult() : handleInput(btn))}
                style={{
                  padding: '15px',
                  fontSize: '1rem',
                  border: '1px solid #ddd',
                  borderRadius: '3px',
                  backgroundColor: btn === '=' ? '#4caf50' : '#f9f9f9',
                  color: btn === '=' ? '#fff' : '#000',
                }}
              >
                {btn}
              </button>
            )
          )}
          {/* Clear Button */}
          <button
            onClick={clearDisplay}
            style={{
              gridColumn: 'span 4',
              padding: '15px',
              fontSize: '1rem',
              border: '1px solid #ddd',
              borderRadius: '3px',
              backgroundColor: '#f44336',
              color: '#fff',
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
