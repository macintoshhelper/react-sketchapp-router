import * as React from 'react';
import { render } from 'react-sketchapp';

import App from './App';

const sizes = [{
  name: 'Mobile', width: 360, height: 640,
}, {
  name: 'Tablet', width: 1024, height: 768,
}, {
  name: 'Desktop', width: 1280, height: 1024,
}];

const screensTotalWidth = sizes.reduce((acc, { width }) => {
  acc += width + 70;

  return acc;
}, 0);

export default () => {


  render(<App sizes={sizes} pageWidth={screensTotalWidth} />, context.document.currentPage());
};
