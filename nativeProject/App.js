import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Screens from './components/Screens';
import Auth from './components/Auth';

class App extends React.Component {

  render() {
    return (
      <Auth />
    );
  }

};



export default App;