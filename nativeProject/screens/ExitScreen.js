import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Button,
    BackHandler,
    Text
} from 'react-native';


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

class ExitScreen extends Component {

 
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Exit this app</Text>
               <Button title="exit" onPress={()=>BackHandler.exitApp()}/>
            </View>
        );
    }
}
 
export default ExitScreen;