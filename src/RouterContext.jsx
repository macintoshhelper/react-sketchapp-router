// @flow
import * as React from 'react';

import * as model from './model';

export type State = {|
  location: model.Location,
  locations?: model.Location[],
  match?: model.Match,
  viewport?: Object,
|};

type Value = {
  state: State,
  dispatch: ({ type: string, payload: Object }) => void,
};

const initialState = {
  location: {
    pathname: '/',
  },
};

export const RouterContext = React.createContext<Value>({
  state: initialState,
  dispatch: () => {},
});

export const RouterProvider = ({
  locations, location, viewport, match, children,
}: { ...State, children: React.Node }) => {
  const state = { location, locations, viewport, match };
  const dispatch = () => {};

  return (
    <RouterContext.Provider value={{ state, dispatch }}>
      {children}
    </RouterContext.Provider>
  );
};

export function withRouter<Config>(
  Component: React.AbstractComponent<{|
    ...Config,
    ...State,
  |}>,
): React.AbstractComponent<Config> {
  return (props: Config) => (
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
