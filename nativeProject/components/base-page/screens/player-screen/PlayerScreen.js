import React, {Component} from 'react';
import TrackPlayer from "react-native-track-player";
import Player from './Player'

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes
} from "react-native";

import playlist from '../../../../data/playlistData.json';

class MusicPlayerScreen extends Component {
    state = {
      isPlay: false,
    }

    componentDidMount() {
     this.setup();
    }

    setup = async () =>{
     // await TrackPlayer.setupPlayer({});
      await TrackPlayer.updateOptions({
          stopWithApp: true,
          capabilities: [
              TrackPlayer.CAPABILITY_PLAY,
              TrackPlayer.CAPABILITY_PAUSE,
              TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
              TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
          ],
          compactCapabilities: [
              TrackPlayer.CAPABILITY_PLAY,
              TrackPlayer.CAPABILITY_PAUSE
          ]
      });
    }

    togglePlayback = async () =>{
        const playbackState = await TrackPlayer.getState();
        const currentTrackId = await TrackPlayer.getCurrentTrack();
        if (currentTrackId == null) {
          await TrackPlayer.reset();
          await TrackPlayer.add([...[],...playlist]);
          await TrackPlayer.play();
          this.setState({isPlay: true});
          console.log('плей')
        } else {
          if (playbackState === TrackPlayer.STATE_PAUSED) {
            await TrackPlayer.play();
            this.setState({isPlay: true});
            console.log('плей')
          } else {
            await TrackPlayer.pause();
            this.setState({isPlay: false});
            console.log('на паузу')
          }
        }
    }

    nextSound = async () =>{
      try {
        await TrackPlayer.skipToNext();
        console.log('некст трек')
      } catch (_) {
        console.log('это ласт трек')
      }
    }

    prevSound = async () =>{
      try {
        await TrackPlayer.skipToPrevious();
        console.log('прев трек')
      } catch (_) {
        console.log('это первый трек')
      }
    }

    render() {
        const { isPlay } = this.state;

        return (
          <View style={styles.container}>
            <Player 
              togglePlayback={this.togglePlayback}
              nextSound={this.nextSound}
              prevSound={this.prevSound}
              isPlay={isPlay}
            />
          </View>
        );
    }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: 'grey'
  }
})

export default MusicPlayerScreen;