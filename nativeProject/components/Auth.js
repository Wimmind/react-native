import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NativeModules,
} from 'react-native';
import TwitterButton from './TwitterButton';

const { RNTwitterSignIn } = NativeModules;

const Constants = {
  TWITTER_COMSUMER_KEY: "qWPj1TXbreMX1SsDvdiQTaF7Y",
  TWITTER_CONSUMER_SECRET: "4t0cRfGWXZvySIa5sS0M38AnT8a8B8hwcX2lZiaStSWStD4B4Z"
}


export default class Auth extends Component {
    state = {
        isLoggedIn: false
    }

    twitterSignIn = () => {
        RNTwitterSignIn.init(Constants.TWITTER_COMSUMER_KEY, Constants.TWITTER_CONSUMER_SECRET)
        RNTwitterSignIn.logIn()
          .then(loginData => {
            const { authToken, authTokenSecret } = loginData
            if (authToken && authTokenSecret) {
              this.setState({
                isLoggedIn: true
              })
              console.log('успешная регистрация')
            }
          })
          .catch(error => {
            console.log(error)
          }
        )
      }

    render() {
        const {isLoggedIn} = this.state;

        return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
            Welcome to my app!
            </Text>
            <TwitterButton 
                style={styles.button} 
                isLoggedIn={isLoggedIn} 
                twitterSignIn = {this.twitterSignIn}
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    height: 50,
  },
  icon: {
    width: 100,
    height: 30
  }
});