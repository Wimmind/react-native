
import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Button,
    BackHandler,
    Text
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    text: {
        marginBottom: 20
    }
})

class Autorization extends Component {

 
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Autorization</Text>
               
            </View>
        );
    }
}

export default Autorization;