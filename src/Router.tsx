import React, { ReactNode } from 'react';
import { createLocation } from 'history';

import * as model from './model';
import { RouterProvider } from './RouterContext';

const computeRootMatch = (pathname: string) => ({
  path: '/', url: '/', params: {}, isExact: pathname === '/',
});



// Polyfill for react-router Router (without history)
interface Props {
  location?: string | model.Location;
  locations?: string[] | model.Location[];
  viewport: model.Viewport;
  children: ReactNode;
};

const Router = ({ locations: locs, location: loc, viewport, children }: Props) => {
  const locations = (locs && Array.isArray(locs))
    ? (locs as model.Location[]).map((loc: string | model.Location) => typeof loc === 'string' ? createLocation(loc) : loc)
    : [];
  const location = typeof loc === 'string' ? createLocation(loc) : loc;


  const match = computeRootMatch((locations.find(({ pathname }: { pathname: string }) => pathname) || {}).pathname || '/');

  return (
    <RouterProvider location={location} locations={locations} viewport={viewport} match={match}>
      {children}
    </RouterProvider>
  );
};

export default Router;
