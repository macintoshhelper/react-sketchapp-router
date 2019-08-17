# React Sketch.app Router

Render your React app as a Sketch prototype. This is **in development** and **incomplete**, so the API is not final and we discourage use for production.

This is using a fork of `react-sketchapp` and exists as a proof of concept.

**The API is not final and will change!!!! This is a proof of concept!**

## Getting Started

1. Make sure you have Node.js and `npm` setup.

2. Install this package with `npm install --save react-sketchapp-router` and refer to `examples/responsive-devices` for an example.

3. Install `react-sketchapp` and make sure to change the source of it to `github:macintoshhelper/react-sketchapp#build`, since this is using a fork of `react-sketchapp`.

## Example

Inside `react-sketchapp`'s `render argument, use this:

```js
import { Router, Route, Link } from 'react-sketchapp-router';
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
      <Router history={{ location: '/' }} viewport={{ name: 'Mobile', width: 360, height: 640 }}>
        <Route path="/" exact render={({ location }) => <Home /> } />
        <Route path="/about" render={({ location }) => <About />} />
      </Router>
    </Page>
  </Document>
)
```



## Credit
  - [react-sketchapp](https://github.com/airbnb/react-sketchapp)
    - MIT License
    - Copyright (c) 2018 Airbnb

## License

[LICENSE](./LICENSE)
