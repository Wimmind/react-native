import React from 'react';
import { NativeRouter, Route, Redirect } from "react-router-native";

import Screens from './base-page/Screens';
import Auth from './auth-page/Auth';

class App extends React.Component {

  render() {
    return (
      <NativeRouter>
          <Route exact path='/auth' component={Auth} />
          <Route exact path='/mainPage' component={Screens} />
          <Redirect from='/' to='/mainPage'/>
      </NativeRouter>
    );
  }

};



export default App;