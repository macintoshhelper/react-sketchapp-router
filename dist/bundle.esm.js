import React, { createContext } from 'react';
import { Artboard, HotSpot } from 'react-sketchapp';

var RouterContext = createContext();

var RouterProvider = function RouterProvider(_ref) {
  var history = _ref.history,
      viewport = _ref.viewport,
      children = _ref.children;
  var state = {
    history: history,
    viewport: viewport
  };

  var dispatch = function dispatch() {};

  var value = {
    state: state,
    dispatch: dispatch
  };
  return React.createElement(RouterContext.Provider, {
    value: value
  }, children);
};

var RouterContextConsumer = RouterContext.Consumer;

var Router = function Router(_ref) {
  var history = _ref.history,
      viewport = _ref.viewport,
      children = _ref.children;
  return React.createElement(RouterProvider, {
    history: history,
    viewport: viewport
  }, children);
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var withRouter = function withRouter(Component) {
  return function (props) {
    return React.createElement(RouterContext.Consumer, null, function (value) {
      var _ref = value || {},
          state = _ref.state;

      var _ref2 = state || {},
          history = _ref2.history,
          viewport = _ref2.viewport;

      var _ref3 = history || {},
          location = _ref3.location;

      return React.createElement(Component, _extends({}, props, {
        location: location,
        viewport: viewport,
        history: history
      }));
    });
  };
};

var Route = function Route(_ref) {
  var location = _ref.location,
      path = _ref.path,
      viewport = _ref.viewport,
      render = _ref.render;
  var deviceName = viewport.name,
      width = viewport.width,
      height = viewport.height;
  var id = "".concat(path.replace('/', ''), "/").concat(deviceName);
  var props = {
    location: location,
    path: path
  };
  var children;

  if (render && typeof render === 'function') {
    children = render(props);
  }

  return React.createElement(Artboard, {
    id: id,
    name: id,
    isHome:
    /*location === id*/
    path === '/',
    style: {
      width: width,
      minHeight: height
    },
    viewport: viewport
  }, children);
};

var Route$1 = withRouter(Route);

var Link = function Link(_ref) {
  var viewport = _ref.viewport,
      to = _ref.to,
      children = _ref.children;
  return React.createElement(HotSpot, {
    flow: {
      target: "".concat(to.replace('/', ''), "/").concat(viewport.name)
    }
  }, children);
};

var Link$1 = withRouter(Link);

export { Link$1 as Link, Route$1 as Route, Router };
