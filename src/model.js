// @flow

type MixedObject = { [string]: mixed };


export type Viewport = {
  name: string,
  width: number,
  height: number,
};

export type Location = {
  key?: string,
  pathname: string,
  search?: string,
  hash?: string,
  state?: {
    [string]: mixed,
  },
};

export type Match = {
  params: MixedObject,
  isExact: boolean,
  path: string,
  url: string,
};
