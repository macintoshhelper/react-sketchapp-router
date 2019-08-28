import React__default, { createElement, createContext, Fragment } from 'react';
import { Artboard, View } from 'react-sketchapp';
import { matchPath } from 'react-router';

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

function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
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

  return _extends$1.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var initialState = {
  location: {
    pathname: '/'
  }
};
var RouterContext = createContext({
  state: initialState,
  dispatch: function dispatch() {}
});
var RouterProvider = function RouterProvider(_ref) {
  var locations = _ref.locations,
      location = _ref.location,
      viewport = _ref.viewport,
      match = _ref.match,
      children = _ref.children;
  var state = {
    location: location,
    locations: locations,
    viewport: viewport,
    match: match
  };

  var dispatch = function dispatch() {};

  return createElement(RouterContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    }
  }, children);
};
function withRouter(Component) {
  return function (props) {
    return createElement(RouterContext.Consumer, null, function (value) {
      var _ref2 = value || {},
          state = _ref2.state;

      var _ref3 = state || {},
          location = _ref3.location,
          locations = _ref3.locations,
          viewport = _ref3.viewport,
          match = _ref3.match;

      return createElement(Component, _extends$1({
        location: location,
        locations: locations,
        viewport: viewport,
        match: match
      }, props
      /* eslint-disable-line react/jsx-props-no-spreading */
      ));
    });
  };
}

var computeRootMatch = function computeRootMatch(pathname) {
  return {
    path: '/',
    url: '/',
    params: {},
    isExact: pathname === '/'
  };
}; // Polyfill for react-router Router (without history)


var Router = function Router(_ref) {
  var locs = _ref.locations,
      loc = _ref.location,
      viewport = _ref.viewport,
      children = _ref.children;
  var locations = Array.isArray(locs) && locs.length > 0 // $FlowFixMe
  ? locs.map(function (loc) {
    return typeof loc === 'string' ? createLocation(loc) : loc;
  }) : [];
  var location = typeof loc === 'string' ? createLocation(loc) : loc;
  var match = computeRootMatch(locations.find(function (_ref2) {
    var pathname = _ref2.pathname;
    return pathname;
  }) || '/');
  return React__default.createElement(RouterProvider, {
    locations: locations,
    viewport: viewport,
    match: match
  }, children);
};

var isEmptyChildren = function isEmptyChildren(children) {
  return React__default.Children.count(children) === 0;
};

var Route = function Route(_ref) {
  var location = _ref.location,
      exact = _ref.exact,
      strict = _ref.strict,
      sensitive = _ref.sensitive,
      path = _ref.path,
      viewport = _ref.viewport,
      render = _ref.render,
      component = _ref.component,
      computedMatch = _ref.computedMatch,
      contextMatch = _ref.match,
      otherProps = _objectWithoutProperties(_ref, ["location", "exact", "strict", "sensitive", "path", "viewport", "render", "component", "computedMatch", "match"]);

  var viewports = Array.isArray(viewport) ? viewport : [viewport]; // const location = locations.find(location => (computedMatch || (path
  //   ? matchPath(pathname, {
  //     path, exact, strict, sensitive,
  //   })
  //   : contextMatch)));

  var _ref2 = location || {},
      pathname = _ref2.pathname;

  var match = computedMatch || (path ? matchPath(pathname, {
    path: path,
    exact: exact,
    strict: strict,
    sensitive: sensitive
  }) : contextMatch);
  var props = {
    location: location,
    path: path,
    match: match
  };
  var children = otherProps.children;

  if (children && typeof children === 'function') {
    children = children(props);
  }

  var childrenToRender = children && !isEmptyChildren(children) ? children : match ? component ? React__default.createElement(component, props) : render ? render(props) : null : null;
  return viewports.map(function (_ref3) {
    var name = _ref3.name,
        width = _ref3.width,
        height = _ref3.height;
    return childrenToRender !== null ? React__default.createElement(RouterProvider, {
      key: name,
      location: location,
      viewport: {
        name: name,
        width: width,
        height: height
      },
      match: match
    }, React__default.createElement(Artboard, {
      id: "".concat(path, ":").concat(name.toLowerCase()),
      name: "".concat(path, ":").concat(name.toLowerCase()),
      isHome: path === '/',
      style: {
        width: width,
        minHeight: height,
        marginRight: 70,
        marginBottom: 70
      },
      viewport: viewport
    }, childrenToRender)) : null;
  });
};

var Route$1 = withRouter(Route);

var Link = function Link(_ref) {
  var viewport = _ref.viewport,
      to = _ref.to,
      children = _ref.children;

  if (typeof to !== 'string') {
    return null;
  }

  if (Array.isArray(viewport) || !viewport) {
    console.warn('Viewport is not valid. Please use Link inside of Routes');
  }

  return React__default.createElement(View, {
    flow: {
      target: "".concat(to, ":").concat(viewport.name.toLowerCase())
    }
  }, children);
};

var Link$1 = withRouter(Link);

var Switch = function Switch(_ref) {
  var locations = _ref.locations,
      routerMatch = _ref.match,
      children = _ref.children;
  // let match;
  // let location = {};
  // We use React.Children.forEach instead of React.Children.toArray().find()
  // here because toArray adds keys to all child elements and we do not want
  // to trigger an unmount/remount for two <Route>s that render the same
  // component at different URLs.
  // React.Children.forEach(children, (child) => {
  // });

  return Array.isArray(children) && children.length > 0 ? React__default.createElement(Fragment, null, React__default.Children.map(children, function (child) {
    var match, element, location;

    if (React__default.isValidElement(child)) {
      element = child;
      var path = child.props.path || child.props.from;
      location = path ? locations.find(function (_ref2) {
        var pathname = _ref2.pathname;
        return matchPath(pathname, _objectSpread2({}, child.props, {
          path: path
        }));
      }) || {} : {}; // console.log(JSON.stringify({ path, location }, null, 2));

      match = path ? matchPath(location.pathname, _objectSpread2({}, child.props, {
        path: path
      })) : routerMatch;
    }

    return element && match ? React__default.cloneElement(child, {
      location: location,
      computedMatch: element.computedMatch
    }) : null;
  })) : null;
};

var Switch$1 = withRouter(Switch);

export { Link$1 as Link, Route$1 as Route, Router as SketchRouter, Switch$1 as Switch };
