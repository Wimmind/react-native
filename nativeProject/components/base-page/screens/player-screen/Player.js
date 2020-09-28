import React, {Component} from 'react';
import TrackPlayer from "react-native-track-player";


import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewPropTypes
} from "react-native";



class Player extends Component {
    state = {
      trackTitle: '',
      trackArtist: ''
    }

    componentDidMount() {
      this.onTrackChange = TrackPlayer.addEventListener('playback-track-changed', async (data) => {
          const track = await TrackPlayer.getTrack(data.nextTrack);
          if (track) {
            this.setState({trackTitle: track.title});
            this.setState({trackArtist: track.artist});
          }
      });
    }

    componentWillUnmount() {
      this.onTrackChange.remove();
    }
    

    render() {
        const {
            prevSound,
            nextSound,
            togglePlayback,
            isPlay
        } = this.props;

        const {trackTitle, trackArtist} = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{trackTitle}</Text>
                <Text style={styles.artist}>{trackArtist}</Text>
            
                <View style={styles.controls}>
                    <ControlButton title={"<<"} onPress={()=>prevSound()} />
                    <ControlButton 
                      title={isPlay ? 'Pause' : 'Play'} 
                      onPress={()=>togglePlayback()} 
                    />
                    <ControlButton title={">>"} onPress={()=>nextSound()} />
                </View>
            </View>
        )
    }
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
      alignItems: "center",
      backgroundColor: "#37393d",
  },
  title: {
    marginTop: 10,
    color: "#00fcd6"
  },
  artist: {
    color: "#00fcd6",
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
    color: "#00fcd6",
    fontSize: 18,
    textAlign: "center"
  }
});

export default Player;

