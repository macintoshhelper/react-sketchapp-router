type MixedObject = { [key: string]: any };


export interface Viewport {
  name: string;
  width: number;
  height: number;
};

export interface Location {
  key?: string;
  pathname: string;
  search?: string;
  hash?: string;
  state?: MixedObject;
};

export interface Match {
  params: MixedObject,
  isExact: boolean,
  path: string,
  url: string,
};
