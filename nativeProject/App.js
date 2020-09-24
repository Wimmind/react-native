import React from 'react';
import { NativeRouter, Route, Redirect } from "react-router-native";

import Screens from './components/Screens';
import Auth from './components/Auth';

class App extends React.Component {

  render() {
    return (
      <NativeRouter>
          <Route exact path='/auth' component={Auth} />
          <Route exact path='/mainPage' component={Screens} />
          <Redirect from='/' to='/auth'/>
      </NativeRouter>
    );
  }

};



export default App;