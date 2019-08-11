import React from 'react';

import { LayoutContext } from './LayoutProvider';

const withContext = Component => (props) => (
  <LayoutContext.Consumer>
    {value => <Component {...props} value={value} />}
  </LayoutContext.Consumer>
);

export default withContext;
