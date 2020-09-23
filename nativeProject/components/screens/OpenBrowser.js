import React, {Component , useCallback } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Linking,
} from 'react-native';

const url = "https://q-digital.org/";

const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    text: {
        marginBottom: 20
    }
})

class OpenBrowserScreen extends Component {

    handlePress = () => {
        Linking.openURL(url)
    }
 
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Open Q-Digital site</Text>
               <Button title="open" onPress={this.handlePress}/>
            </View>
        );
    }
}
 
export default OpenBrowserScreen;