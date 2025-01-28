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
import React, { useState, useEffect } from 'react';

function TimerComponent() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Count:', count);
    }, 1000); // This runs every second
    setIntervalId(timer);

    // Cleanup: Stops the timer when the component unmounts
    return () => {
      console.log('Cleaning up...');
      clearInterval(intervalId); // Clears the timer
    };
  }, [count]); // Runs when `count` changes

  useEffect(() => {
    return () => {
      clearInterval(intervalId); // Clears the timer when component unmounts
    };
  }, [intervalId]);

  return (
    <div>
      <p>Check the console for the timer log</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => clearInterval(intervalId)}>Stop Timer</button>
      <button onClick={() => setIntervalId(setInterval(() => console.log('Count:', count), 1000))}>Start Timer</button>
    </div>
  );
}

export default TimerComponent;
export default TimerComponent;
