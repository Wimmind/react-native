import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Button,
    BackHandler,
    Text
} from 'react-native';
import TrackPlayer from 'react-native-track-player';


const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    text: {
        marginBottom: 20
    },
    button: {
        width: 200,
        height: 50
    }
})

class ExitScreen extends Component {

    exitApp = () => {
        TrackPlayer.destroy();
        BackHandler.exitApp()
    }
 
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Exit this app</Text>
                <Button title="exit" onPress={this.exitApp} style={styles.button}/>
            </View>
        );
    }
}
 
export default ExitScreen;