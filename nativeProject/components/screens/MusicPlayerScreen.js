import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Sound from 'react-native-sound';

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

class MusicPlayerScreen extends Component {

  // sound = new Sound(require('../assets/mountain-king.mp3'));

    playSound = () => {
       // this.sound.play()
    }
 
    render() {
        return (
            <View style={styles.container}>
               <Text style={styles.text}>PL1AY</Text>
            </View>
        );
    }
}
 
export default MusicPlayerScreen;

/*
 <TouchableOpacity onPress={this.playSound}>
                    <View>
                        <Text style={styles.text}>PLAY</Text>
                    </View>
                </TouchableOpacity>
                */