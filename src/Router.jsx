import React from 'react';

import { RouterProvider } from './RouterContext';

const Router = ({ history, viewport, children }) => {
  return (
    <RouterProvider history={history} viewport={viewport}>
      {children}
    </RouterProvider>
  );
};

export default Router;
