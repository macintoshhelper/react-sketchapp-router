/* eslint-disable no-nested-ternary */
// @flow
import React, { type Config, type ComponentType } from 'react';
import { Artboard } from 'react-sketchapp';
import { matchPath } from 'react-router';

import * as model from './model';
import { RouterProvider, withRouter } from './RouterContext';

const isEmptyChildren = (children) => (React.Children.count(children) === 0);

type Props = {|
  location: model.Location,
  viewport: model.Viewport | model.Viewport[],
  render: ({ [string]: mixed }) => ComponentType<mixed>,
  component: ComponentType<mixed>,
  path: string,
  match: model.Match,
  computedMatch: model.Match,
  exact: boolean,
  strict: boolean,
  sensitive: boolean,
  children: ({ [string]: mixed }) => ComponentType<mixed>,
|};

const Route = ({
  location, exact, strict, sensitive, path, viewport,
  render, component, computedMatch, match: contextMatch, ...otherProps
}: Props) => {
  const viewports: model.Viewport[] = Array.isArray(viewport) ? viewport : [viewport];
  // const location = locations.find(location => (computedMatch || (path
  //   ? matchPath(pathname, {
  //     path, exact, strict, sensitive,
  //   })
  //   : contextMatch)));
  
  const { pathname } = location || {};


  const match = computedMatch || (path
    ? matchPath(pathname, {
      path, exact, strict, sensitive,
    })
    : contextMatch);

  const props = { location, path, match };

  let { children } = otherProps;

  if (children && typeof children === 'function') {
    children = children(props);
  }

  const childrenToRender = children && !isEmptyChildren(children)
    ? children
    : match
      ? component
        ? React.createElement(component, props)
        : render
          ? render(props)
          : null
      : null;

  return viewports.map(({ name, width, height }) => ((childrenToRender !== null) ? (
    <RouterProvider key={name} location={location} viewport={{ name, width, height }} match={match}>
      <Artboard
        id={`${path}:${name.toLowerCase()}`}
        name={`${path}:${name.toLowerCase()}`}
        isHome={path === '/'}
        style={{
          width, minHeight: height, marginRight: 70, marginBottom: 70,
        }}
        viewport={viewport}
      >
        {childrenToRender}
      </Artboard>
    </RouterProvider>
  ) : null));
};

export default withRouter<Config<Props, {}>>(Route);
