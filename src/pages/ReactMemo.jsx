import React from 'react';

// A simple functional component that renders a message
const Message = ({ text }) => {
  console.log("Message component re-rendered");
  return <div>{text}</div>;
};

// Memoize the component
const MemoizedMessage = React.memo(Message);

const ParentComponent = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      {/* MemoizedMessage won't re-render unless the "text" prop changes */}
      <MemoizedMessage text="Hello, World!" />
      <p>Count: {count}</p>
    </div>
  );
};

export default ParentComponent;
