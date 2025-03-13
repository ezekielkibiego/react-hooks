import React, { Suspense, useState } from 'react';

// Lazy load the HeavyComponent
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

const ParentComponent = () => {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div>
      <button onClick={() => setShowComponent(true)}>Load Component</button>
      
      {/* Use Suspense to show fallback while HeavyComponent is loading */}
      {showComponent && (
        <Suspense fallback={<div>Loading...</div>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
};

export default ParentComponent;
