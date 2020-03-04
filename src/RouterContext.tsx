import React, { createContext, ReactNode, ComponentType, FunctionComponent } from 'react';

import * as model from './model';

// import { Props as WithRouterProps } from './Route';

export type State = {
  location: model.Location,
  locations?: model.Location[],
  match?: model.Match,
  viewport?: Object,
};

type Value = {
  state: State,
  dispatch: ({}: { type: string, payload: Object }) => void,
};

const initialState = {
  location: {
    pathname: '/',
  },
};

export const RouterContext = createContext<Value>({
  state: initialState,
  dispatch: () => {},
});


export const RouterProvider = ({
  locations, location, viewport, match, children,
}: State & { children: ReactNode }) => {
  const state = { location, locations, viewport, match };
  const dispatch = () => {};

  return (
    <RouterContext.Provider value={{ state, dispatch }}>
      {children}
    </RouterContext.Provider>
  );
};

type WithRouterProps = {}; // ???

export const withRouter = <P extends WithRouterProps>(Component: ComponentType<P>): FunctionComponent<P>  => {
  return (props: P) => (
    <RouterContext.Consumer>
      {(value) => {
        const { state } = value || {};
        const { location, locations, viewport, match } = state || {};

        return (
          <Component
            location={location}
            locations={locations}
            viewport={viewport}
            match={match}
            {...props /* eslint-disable-line react/jsx-props-no-spreading */}
          />
        );
      }}
    </RouterContext.Consumer>
  );
}
