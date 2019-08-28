// @flow
import React, { createElement, Fragment, type Node, type Config } from 'react';

import { matchPath } from 'react-router';

import * as model from './model';
import { withRouter, type State } from './RouterContext';

// const isObject = (n) => (typeof n === 'object' && n !== null);

type Props = {|
  locations: model.Location[],
  match: model.Match,
  children: Node,
  ...State,
|};

const Switch = ({ locations, match: routerMatch, children }: Props) => {
  const elements = [];
  // let element;
  // let match;
  // let location = {};

  // We use React.Children.forEach instead of React.Children.toArray().find()
  // here because toArray adds keys to all child elements and we do not want
  // to trigger an unmount/remount for two <Route>s that render the same
  // component at different URLs.
  // React.Children.forEach(children, (child) => {
    
  // });

  return (Array.isArray(children) && children.length > 0) ? (
    <Fragment>
      {React.Children.map(children, (child) => {
        let match, element, location;
        if (React.isValidElement(child)) {
          element = child;

          const path = child.props.path || child.props.from;

          location = path ? locations.find(({ pathname }) => matchPath(pathname, { ...child.props, path })) || {} : {};
          // console.log(JSON.stringify({ path, location }, null, 2));

          match = (path)
            ? matchPath(location.pathname, { ...child.props, path })
            : routerMatch;
        }

        return (element && match) ? React.cloneElement(child, { location, computedMatch: element.computedMatch }) : null;
      })}
    </Fragment>
  ) : null;
};


export default withRouter<Config<Props, {}>>(Switch);
