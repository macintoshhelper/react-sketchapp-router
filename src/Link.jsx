import React from 'react';
import { HotSpot } from 'react-sketchapp';

import withRouter from './withRouter';

const Link = ({ viewport, to, children }) => {

  return (
    <HotSpot flow={{ target: `${to.replace('/', '')}/${viewport.name}` }}>
      {children}
    </HotSpot>
  )
};

export default withRouter(Link);
