import React, { createElement, Fragment, ReactNode, FunctionComponentElement } from 'react';

import { matchPath } from 'react-router';

import * as model from './model';
import { withRouter, State } from './RouterContext';

// const isObject = (n) => (typeof n === 'object' && n !== null);


export interface Props {
  locations?: model.Location[];
  match?: model.Match;
  children: ReactNode;
}

type A = {
  path: string,
  from: string,
  location: any,
  computedMatch: any, // No idea??? I forgot...
};

const Switch = ({ locations, match: routerMatch, children }: Props) => {
  const elements = [];
  // let element;
  // let match;
  // let location = {};


  return (
    <Fragment>
      {(Array.isArray(children) && children.length > 0) ? (
        <Fragment>
          {React.Children.map(children, (child: FunctionComponentElement<A>) => {
            let match, element, location: model.Location;
            if (React.isValidElement(child)) {
              element = child;

              const path = child.props.path || child.props.from;

              location = path ? locations.find(({ pathname }) => matchPath(pathname, { ...child.props, path })) || null : null;
              // console.log(JSON.stringify({ path, location }, null, 2));

              match = (path && location && location.pathname)
                ? matchPath(location.pathname, { ...child.props, path })
                : routerMatch;
            }

            return (element && match) ? React.cloneElement(child, { location, computedMatch: match }) : null;
          })}
        </Fragment>
      ) : null}
      </Fragment>
    );
};


export default withRouter(Switch);
