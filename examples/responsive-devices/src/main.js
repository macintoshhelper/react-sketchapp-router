/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-filename-extension */
import React, { Fragment, useContext } from 'react';
import { render, Document, Page, View, Text } from 'react-sketchapp';

import { SketchRouter, Route, Link, Switch } from 'react-sketchapp-router';

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
);
const Profile = ({ username }) => {
  return (
    <View>
      <Fragment>
        {username ? (
          <Fragment>
            <Text>{`Welcome ${username}!`}</Text>
            <Link to="/">
              <Text>Go to Home</Text>
            </Link>
          </Fragment>
        ) : (
          <Text>User not found</Text>
        )}
      </Fragment>
    </View>
  );
};
const NotFound = () => (
  <View>
    <Text>404</Text>
    <Link to="/">
      <Text>Go to Home</Text>
    </Link>
  </View>
);

const viewports = [{
  name: 'Mobile', width: 360, height: 640,
}, {
  name: 'Tablet', width: 1024, height: 768,
}];

const pageWidth = viewports.reduce((acc, { width }) => {
  acc += (width + 70);
  return acc;
}, 0);

export default () => {
  const data = context.document.documentData();
  const pages = context.document.pages();

  data.setCurrentPage(pages.firstObject());

  render((
    <Document>
      <Page name="App" style={{ flexDirection: 'row', flexWrap: 'wrap', maxWidth: pageWidth }}>
        <SketchRouter
          locations={["/profile/jack", '/']}
          // locations={[['/'], ['/about'], ['/profile', { username: 'John' }]]}
          viewport={viewports}
        >
          <Switch>
            <Route exact path="/" exact render={({ location }) => <Home /> } />
            <Route path="/about" render={({ location }) => <About />} />
            <Route path="/profile/:username" render={({ match: { params } }) => <Profile {...params} />} />
            <Route component={NotFound} />
          </Switch>
        </SketchRouter>
      </Page>
    </Document>
  ));
};
