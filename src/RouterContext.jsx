import React, { createContext } from 'react';

const RouterContext = createContext();

const RouterProvider = ({ history, viewport, children }) => {
  const state = { history, viewport };
  const dispatch = () => {};
  const value = { state, dispatch };

  return (
    <RouterContext.Provider value={value}>
      {children}
    </RouterContext.Provider>
  );
};

const RouterContextConsumer = RouterContext.Consumer;

export { RouterProvider, RouterContext, RouterContextConsumer };
