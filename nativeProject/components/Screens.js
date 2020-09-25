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

import Icon from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator();

class Screens extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="dark-content" backgroundColor="#00fcd6"/>
        <NavigationContainer>
          <Tab.Navigator
             tabBarOptions={{
              activeTintColor:"#37393d",
              inactiveTintColor:"#00fcd6",
              activeBackgroundColor:"#00fcd6",
              inactiveBackgroundColor:"#37393d"
             }}
             screenOptions={({route})=>({
               tabBarIcon: ({color})=>{
                 const iconName = renderIcon[route.name];
                 return <Icon name={iconName} size={25} color={color}/>
               }
             })}
            >
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

const renderIcon = {
  'Slider' : 'image',
  'Music' : 'music',
  'Browser' : 'link',
  'Exit' : 'sign-out',
}


export default Screens;