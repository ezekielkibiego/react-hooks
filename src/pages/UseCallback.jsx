import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ onClick }) => {
  console.log("Child component re-rendered");
  return <button onClick={onClick}>Click me</button>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Memoize the handleClick function using useCallback
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      {/* Pass the memoized handleClick to the child component */}
      <ChildComponent onClick={handleClick} />
      <p>Count: {count}</p>
    </div>
  );
};

export default ParentComponent;
