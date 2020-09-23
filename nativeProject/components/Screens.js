import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Provider} from 'react-redux';
import store from '../store/store';

import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SliderScreen from './screens/SliderScreen';
import MusicPLayerScreen from './screens/MusicPlayerScreen';
import OpenBrowserScreen from './screens/OpenBrowser';
import ExitScreen from './screens/ExitScreen';

const Tab = createBottomTabNavigator();

class Screens extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="dark-content" backgroundColor="#00aaff"/>
        <NavigationContainer>
          <Tab.Navigator
             tabBarOptions={{
              activeTintColor:"white",
              inactiveTintColor:"gray",
              activeBackgroundColor:"#00aaff",
              inactiveBackgroundColor:"#00aaff"
            }}>
            <Tab.Screen name="Slider" component={SliderScreen} />
            <Tab.Screen name="Music" component={MusicPLayerScreen} />
            <Tab.Screen name="Browser" component={OpenBrowserScreen} />
            <Tab.Screen name="Exit" component={ExitScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }

};



export default Screens;