import React, {Component} from 'react';

import TrackPlayer, {
  useTrackPlayerProgress,
} from "react-native-track-player";


import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes
} from "react-native";

import playlist from '../../data/playlistData';

class MusicPlayerScreen extends Component {
    state = {
        isPlay: false,
        currentTrack: {}
    }

    async componentDidMount() {
        await TrackPlayer.setupPlayer({});
        await TrackPlayer.updateOptions({
            stopWithApp: true,
            capabilities: [
                TrackPlayer.CAPABILITY_PLAY,
                TrackPlayer.CAPABILITY_PAUSE,
                TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
                TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
                TrackPlayer.CAPABILITY_STOP
            ],
            compactCapabilities: [
                TrackPlayer.CAPABILITY_PLAY,
                TrackPlayer.CAPABILITY_PAUSE
            ]
        });
    }

    playSound = async () =>{
    
        await TrackPlayer.play();

        const currentTrack = await TrackPlayer.getCurrentTrack();
        if (currentTrack == null) {
          await TrackPlayer.reset();
          await TrackPlayer.add(playlist);
          await TrackPlayer.play();
        } else {
          if (playbackState === TrackPlayer.STATE_PAUSED) {
            await TrackPlayer.play();
          } else {
            await TrackPlayer.pause();
          }
        }

        this.setState({isPlay: true});
    }

    pouseSound = async () =>{
        await TrackPlayer.pause();
        this.setState({isPlay: false});
    }

    nextSound = async () =>{
        await TrackPlayer.skipToNext();
    }

    prevSound = async () =>{
        await TrackPlayer.skipToNext(); 
    }

    render() {
        console.log(this.state.currentTrack)
        const { isPlay } = this.state;
        //const trackId = await TrackPlayer.getCurrentTrack();
        

        var middleButtonText = "Play";
       let pressFunctional = this.playSound;
    
        if (isPlay) {
            middleButtonText = "Pause";
         //   pressFunctional = this.pouseSound;
        }

        return (
            <View style={styles.container}>
                <Text style={styles.title}>aa</Text>
                <Text style={styles.artist}>ff</Text>
              
                <View style={styles.controls}>
                    <ControlButton title={"<<"} onPress={()=>this.prevSound()} />
                    <ControlButton title={middleButtonText} onPress={()=>pressFunctional()} />
                    <ControlButton title={">>"} onPress={()=>this.nextSound()} />
                </View>
              
            </View>
        );
    }

};

function ProgressBar() {
    const progress = useTrackPlayerProgress();
  
    return (
      <View style={styles.progress}>
        <View style={{ flex: progress.position, backgroundColor: "red" }} />
        <View
          style={{
            flex: progress.duration - progress.position,
            backgroundColor: "grey"
          }}
        />
      </View>
    );
}
  
function ControlButton({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.controlButtonContainer} onPress={onPress}>
        <Text style={styles.controlButtonText}>{title}</Text>
        </TouchableOpacity>
    );
}
  


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
  card: {
        width: "90%",
        elevation: 1,
        borderRadius: 4,
        shadowRadius: 2,
        shadowOpacity: 0.1,
        alignItems: "center",
  },
  cover: {
    width: 140,
    height: 140,
    marginTop: 20,
    backgroundColor: "grey"
  },
  progress: {
    height: 1,
    width: "90%",
    marginTop: 10,
    flexDirection: "row"
  },
  title: {
    marginTop: 10
  },
  artist: {
    fontWeight: "bold"
  },
  controls: {
    marginVertical: 20,
    flexDirection: "row"
  },
  controlButtonContainer: {
    flex: 1
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: "center"
  }
});

export default MusicPlayerScreen;