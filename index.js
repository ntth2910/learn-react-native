/* eslint-disable prettier/prettier */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import {Text} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {Welcome, Login} from './screens/index';

const fakeProducts = [
  {
    productName: 'iphone 3',
    year: 2013,
  },
  {
    productName: 'iphone ',
    year: 2015,
  },
  {
    productName: 'iphone 8',
    year: 2018,
  },
];

AppRegistry.registerComponent(appName, () => () => (
  // <WelcomeScreen
  //   x={1}
  //   y={2}
  //   person={{
  //     name: 'thu ha',
  //     age: 18,
  //     email: 'hanguyen@gmail.com',
  //   }}
  //   products={fakeProducts}
  // />
  // <Welcome />
  <Login />
));
