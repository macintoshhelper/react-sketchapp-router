import React from 'react';
import { Artboard } from 'react-sketchapp';

import withRouter from './withRouter';

const Route = ({ location, path, viewport, render }) => {
  const { name: deviceName, width, height } = viewport
  const id = `${path.replace('/', '')}/${deviceName}`;

  const props = { location, path };

  let children;

  if (render && typeof render === 'function') {
    children = render(props);
  }

  return (
    <Artboard
      id={id}
      name={id}
      isHome={/*location === id*/path === '/'}
      style={{ width, minHeight: height }}
      viewport={viewport}
    >
      {children}
    </Artboard>
  )
};

export default withRouter(Route);
