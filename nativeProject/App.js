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

import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SliderScreen from './screens/SliderScreen';
import MusicPLayerScreen from './screens/MusicPlayerScreen';


const Tab = createBottomTabNavigator();

class App extends React.Component {


  render() {
    return (
      <>
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
            <Tab.Screen name="MusicScreen" component={MusicPLayerScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    );
  }

};



export default App;