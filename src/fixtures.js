// @flow
import * as model from './model';

export const viewport: model.Viewport = {
  name: 'Mobile',
  width: 360,
  height: 640,
  a123: 'a',
};

export const location: model.Location = {
  key: 'ac3df4', // not with HashHistory!
  pathname: '/somewhere',
  search: '?some=search-string',
  hash: '#howdy',
  state: {
    a: 'test',
  },
  a123: '123',
};
