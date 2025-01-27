import React, { useState, useEffect } from 'react';

function TimerComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Count:', count);
    }, 1000); // This runs every second

    // Cleanup: Stops the timer when the component unmounts
    return () => {
      console.log('Cleaning up...');
      clearInterval(timer); // Clears the timer
    };
  }, [count]); // Runs when `count` changes

  return (
    <div>
      <p>Check the console for the timer log</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default TimerComponent;
