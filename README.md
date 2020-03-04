# React Sketch.app Router

Render your React app as a Sketch prototype. This is currently **in development**, so the API is not final and production use is discouraged until a stable release.


## Getting Started

1. Make sure you have Node.js and `npm` setup.

2. Install this package with `npm install --save react-sketchapp-router` and refer to `examples/responsive-devices` for an example.

3. Install `react-sketchapp` and make sure to use the latest `@3` version.

## Example

Inside `react-sketchapp`'s `render argument, use this:

```js
import { SketchRouter, Switch, Route, Link } from 'react-sketchapp-router';
import { render, View, Text, Document, Page } from 'react-sketchapp';

const Home = ({ location }) => (
  <View>
    <Link to="/about">
      <Text>Go to About</Text>
    </Link>
  </View>
);

const About = ({ location }) => (
  <View>
    <Link to="/">
      <Text>Go to Home</Text>
    </Link>
  </View>
);

render(
  <Document>
    <Page name="App">
      <SketchRouter locations={['/profile/jack']} viewport={{ name: 'Mobile', width: 360, height: 640 }}>
        <Switch>
          <Route path="/" exact render={({ location }) => <Home /> } />
          <Route path="/about" render={({ location }) => <About />} />
          <Route path="/profile/:user" render={({ location }) => <About />} />
          <Route render={() => <NotFound />}>
        </Switch>
      </SketchRouter>
    </Page>
  </Document>
)
```

Where `<SketchRouter locations={['/profile/jack']} ` is used to specify data for path params, e.g. `/profile/:user`.



## Inspiration and Code References
  - [react-router](https://github.com/ReactTraining/react-router)
    - MIT License
    - Copyright (c) React Training 2016-2018
  - [react-sketchapp](https://github.com/airbnb/react-sketchapp)
    - MIT License
    - Copyright (c) 2018 Airbnb

## License

[LICENSE](./LICENSE)
