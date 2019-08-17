import React, { createContext } from 'react';

const LayoutContext = createContext();

const LayoutProvider = ({ breakpoint, width, height, children }) => {

  const state = { breakpoint, width, height };
  const dispatch = () => { };
  const value = { state, dispatch };

  return (
    <LayoutContext.Provider value={value}>
      {children}
    </LayoutContext.Provider>
  );
};

const LayoutContextConsumer = LayoutContext.Consumer;

export { LayoutProvider, LayoutContext, LayoutContextConsumer };
