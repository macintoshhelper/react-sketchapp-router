import * as React from 'react';
import { render, Document, Page, View, Text } from 'react-sketchapp';

import { Router, Route, Link } from 'react-sketchapp-router';

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

const Home = () => (
  <View>
    <Text>Home</Text>
    <Link to="/about">
      <Text>Go to About</Text>
    </Link>
  </View>
);

const About = () => (
  <View>
    <Text>About</Text>
    <Link to="/">
      <Text>Go to Home</Text>
    </Link>
  </View>
)

export default () => {
  const data = context.document.documentData();
  const pages = context.document.pages();

  data.setCurrentPage(pages.firstObject());

  render((
    <Document>
      <Page name="App">
        <Router history={{ location: '/' }} viewport={{ name: 'Mobile', width: 360, height: 640 }}>
          <Route path="/" exact render={({ location }) => <Home /> } />
          <Route path="/about" render={({ location }) => <About />} />
        </Router>
      </Page>
    </Document>
  ));
};
