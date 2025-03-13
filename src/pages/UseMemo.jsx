import React, { useMemo, useState } from 'react';

const ExpensiveCalculation = ({ number }) => {
  const calculateFactorial = (n) => {
    console.log("Calculating factorial...");
    return n <= 1 ? 1 : n * calculateFactorial(n - 1);
  };

  // Memoize the result of calculateFactorial to avoid recalculation
  const factorial = useMemo(() => calculateFactorial(number), [number]);

  return <div>Factorial of {number} is {factorial}</div>;
};

const ParentComponent = () => {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <ExpensiveCalculation number={number} />
      <p>Count: {count}</p>
    </div>
  );
};

export default ParentComponent;
