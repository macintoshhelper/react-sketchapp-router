import React from 'react';

import { RouterContext } from './RouterContext';

const withRouter = Component => (props) => (
  <RouterContext.Consumer>
    {(value) => {
      const { state } = value || {};
      const { history, viewport } = state || {};
      const { location } = history || {};

      return <Component {...props} location={location} viewport={viewport} history={history} />
    }}
  </RouterContext.Consumer>
);

export default withRouter;
