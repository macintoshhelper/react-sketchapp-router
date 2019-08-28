// @flow
import React, { type Config, type Node } from 'react';
import { View } from 'react-sketchapp';

import * as model from './model';
import { withRouter } from './RouterContext';

type Props = {|
  viewport: model.Viewport,
  to: string,
  children: Node,
|};

const Link = ({ viewport, to, children }: Props) => {
  if (typeof to !== 'string') {
    return null;
  }
  if (Array.isArray(viewport) || !viewport) {
    console.warn('Viewport is not valid. Please use Link inside of Routes');
  }

  return (
    <View flow={{ target: `${to}:${viewport.name.toLowerCase()}` }}>
      {children}
    </View>
  );
};

export default withRouter<Config<Props, {}>>(Link);
