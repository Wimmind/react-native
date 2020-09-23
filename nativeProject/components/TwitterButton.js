import React, { Component } from "react"
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  NativeModules,
  TouchableOpacity } from "react-native"

export default class TwitterButton extends Component {


  handleLogout = () => {
    console.log("logout")
    RNTwitterSignIn.logOut()
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    const { isLoggedIn,twitterSignIn } = this.props;
    return (
      <View style={this.props.style}>
        {isLoggedIn
          ? <TouchableOpacity onPress={this.handleLogout}>
              <Text>Log out</Text>
            </TouchableOpacity>
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