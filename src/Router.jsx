// @flow
import React, { type Node } from 'react';
import { createLocation } from 'history';

import * as model from './model';
import { RouterProvider } from './RouterContext';

const computeRootMatch = (pathname) => ({
  path: '/', url: '/', params: {}, isExact: pathname === '/',
});



// Polyfill for react-router Router (without history)
type Props = {
  location?: string | model.Location,
  locations?: string[] | model.Location[],
  viewport: model.Viewport,
  children: Node,
};

const Router = ({ locations: locs, location: loc, viewport, children }: Props) => {
  const locations: ?model.Location[] = Array.isArray(locs) && locs.length > 0 // $FlowFixMe
    ? locs.map((loc) => typeof loc === 'string' ? createLocation(loc) : loc)
    : [];
  const location = typeof loc === 'string' ? createLocation(loc) : loc;


  const match = computeRootMatch(locations.find(({ pathname }) => pathname) || '/');

  return (
    <RouterProvider locations={locations} viewport={viewport} match={match}>
      {children}
    </RouterProvider>
  );
};

export default Router;
