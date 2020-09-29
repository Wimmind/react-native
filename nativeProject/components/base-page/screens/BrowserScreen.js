import React, {Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Linking,
} from 'react-native';
import { Button } from 'react-native-elements';

const url = "https://q-digital.org/";

const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'grey'
    },
    text: {
        marginBottom: 20,
        fontSize: 30,
        color: '#0d3adb',
        fontWeight: 'bold'
    }
})


class OpenBrowserScreen extends Component {

    handlePress = () => {
        console.log('открытие: '+url)
        Linking.openURL(url)
    }
 
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Open Q-Digital site</Text>
               <Button 
                title="open" 
                onPress={this.handlePress} 
                titleStyle={{ color: '#00fcd6' }}
                buttonStyle={{backgroundColor:'#37393d'}}/>
            </View>
        );
    }
}
 
export default OpenBrowserScreen;