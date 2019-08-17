import React, { Fragment } from 'react';
import { Page, Artboard, Text, View } from 'react-sketchapp';
import chroma from 'chroma-js';

import { LayoutProvider } from './LayoutProvider';
import withLayout from './withLayout';

// take a hex and give us a nice text color to put over it
const textColor = hex => {
  const vsWhite = chroma.contrast(hex, 'white');
  if (vsWhite > 4) {
    return '#FFF';
  }
  return chroma(hex)
    .darken(3)
    .hex();
};

const colours = ['#E37059', '#24828F', '#2E854B'];

const screens = [{
  name: 'Haus',
  bg: '#F3F4F4',
  component: withLayout(({ value: { state: { breakpoint, width, height } } }) => (
    <View style={{ flexDirection: 'row', height: height / 3 }}>
      {Array(breakpoint + 1).fill(0).map((_, i) => (
        <View style={{ flex: 1, backgroundColor: colours[i], justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: textColor(colours[i]), fontSize: 32 }}>
            {`Column ${breakpoint + 1}`}
          </Text>
        </View>
      ))}
    </View>
  )),
},
{
  name: 'Night',
  bg: '#333',
},
{
  name: 'Sur',
  bg: '#96DBE4',
},
{
  name: 'Sur Dark',
  bg: '#24828F',
},
{
  name: 'Peach',
  bg: '#EFADA0',
},
{
  name: 'Peach Dark',
  bg: '#E37059',
},
{
  name: 'Pear',
  bg: '#93DAAB',
},
{
  name: 'Pear Dark',
  bg: '#2E854B',
}];

const App = ({ sizes, pageWidth }) => (
  <Page name="App" style={{ flex: 1, display: 'flex', alignItems: 'flex-start', flexDirection: 'row', flexWrap: 'wrap', width: pageWidth }}>
    {screens.map(({ name: screenName, bg, component: Component }) => sizes.map(({ name: device, height, width }, i) => (
      <LayoutProvider breakpoint={i} width={width} height={height}>
        <Artboard
          key={`${screenName}/${device}`}
          name={`${screenName}/${device}`}
          style={{
            width,
            minHeight: height,
            marginLeft: 70,
            marginBottom: 70,
          }}
        >
          <Fragment>
            <View style={{ flex: 1, backgroundColor: bg, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 80, color: textColor(bg), marginBottom: 24 }}>
                {screenName}
              </Text>
              <Text style={{ fontSize: 48, color: textColor(bg) }}>
                {device}
              </Text>
            </View>
            {Component && <Component />}
          </Fragment>
        </Artboard>
      </LayoutProvider>
    )))}
  </Page>
);

export default App;
