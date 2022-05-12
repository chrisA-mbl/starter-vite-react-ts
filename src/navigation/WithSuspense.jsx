import React, { memo, Suspense } from 'react';

import Skeleton from '@mui/material/Skeleton';

const fallback = (
  <Skeleton
    variant="rectangular"
    width="100%"
    height={300}
    style={{ margin: '0 auto', maxWidth: '90vw' }}
  />
);

const WithSuspense = (Component) => {
  function WrappedComponent() {
    return (
      <Suspense fallback={fallback}>
        <Component />
      </Suspense>
    );
  }
  return memo(WrappedComponent);
};

export default WithSuspense;
