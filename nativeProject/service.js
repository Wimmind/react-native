import TrackPlayer from 'react-native-track-player';

module.exports = async function() {

  TrackPlayer.addEventListener('remote-play', () => {
    TrackPlayer.play()
    console.log('плей')
  })

  TrackPlayer.addEventListener('remote-pause', () => {
    TrackPlayer.pause()
    console.log('на паузу')
  });

  TrackPlayer.addEventListener('remote-next', async () => {
    try {
      await TrackPlayer.skipToNext();
      console.log('некст трек')
    } catch (_) {
      console.log('это ласт трек')
    }
  });

  TrackPlayer.addEventListener('remote-previous', async () => {
    try {
      await TrackPlayer.skipToPrevious();
      console.log('прев трек')
    } catch (_) {
      console.log('это первый трек')
    }
  });

  TrackPlayer.addEventListener('remote-stop', () => {
    TrackPlayer.stop()
  });

};