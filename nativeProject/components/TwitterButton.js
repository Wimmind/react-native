import React, { Component } from "react"
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  NativeModules,
  TouchableOpacity } from "react-native";
  import { Link } from 'react-router-native';

export default class TwitterButton extends Component {

  render() {
    const { isLoggedIn,twitterSignIn } = this.props;
    return (
      <View style={this.props.style}>
        {isLoggedIn
          ? <Link to={{pathname: '/mainPage'}}>
            <Text>Войти</Text>
          </Link>
          : <Button name="logo-twitter" style={styles.button} onPress={twitterSignIn} title="Login with Twitter">
            </Button>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1b95e0',
    color: 'white',
    width: 200,
    height: 50
  }
})