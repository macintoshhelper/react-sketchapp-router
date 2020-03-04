/* eslint-disable no-nested-ternary */

import React, { Fragment, ReactNode, ComponentClass } from 'react';
import { Artboard } from 'react-sketchapp';
import { matchPath } from 'react-router';

import * as model from './model';
import { RouterProvider, withRouter } from './RouterContext';

const isEmptyChildren = (children: ReactNode) => (React.Children.count(children) === 0);

type ComponentProps = { location: model.Location, path: string, match: model.Match };

export interface Props {
  location: model.Location,
  viewport: model.Viewport | model.Viewport[],
  render: (_: ComponentProps) => ReactNode,
  component: ComponentClass<ComponentProps, {}>,
  path: string,
  match: model.Match,
  computedMatch: model.Match,
  exact: boolean,
  strict: boolean,
  sensitive: boolean,
  children: ReactNode,
};

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

  return (
    <Fragment>
      {viewports.map(({ name, width, height }) => ((childrenToRender !== null) ? (
      <RouterProvider key={name} location={location} viewport={{ name, width, height }} match={match}>
        <Artboard
          name={`${path || '/not-found'}:${name.toLowerCase()}`}
          isHome={path === '/'}
          style={{
            width, minHeight: height, marginRight: 70, marginBottom: 70,
          }}
          viewport={viewport}
        >
          {childrenToRender}
        </Artboard>
      </RouterProvider>
    ) : null))
      }
    </Fragment>
    );
};

export default withRouter(Route);
