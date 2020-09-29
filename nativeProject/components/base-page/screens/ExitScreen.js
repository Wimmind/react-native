import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    BackHandler,
    Text
} from 'react-native';
import { Button } from 'react-native-elements';

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

class ExitScreen extends Component {

    exitApp = () => {
        BackHandler.exitApp()
    }
 
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Exit this app</Text>
                <Button 
                    title="exit" 
                    onPress={this.exitApp} 
                    title="open" 
                    titleStyle={{ color: '#00fcd6' }}
                    buttonStyle={{backgroundColor:'#37393d'}}/>
            </View>
        );
    }
}
 
export default ExitScreen;