import TrackPlayer from 'react-native-track-player';

module.exports = async function() {
  TrackPlayer.addEventListener('remote-play', () => {
    TrackPlayer.play()
    console.log('плей(шторка)')
    
  })

  TrackPlayer.addEventListener('remote-pause', () => {
    TrackPlayer.pause()
    console.log('на паузу(шторка)')
  });

  TrackPlayer.addEventListener('remote-next', async () => {
    try {
      await TrackPlayer.skipToNext();
      console.log('некст трек(шторка)')
    } catch (_) {
      console.log('это ласт трек(шторка)')
    }
  });

  TrackPlayer.addEventListener('remote-previous', async () => {
    try {
      await TrackPlayer.skipToPrevious();
      console.log('прев трек(шторка)')
    } catch (_) {
      console.log('это первый трек(шторка)')
    }
  });

  TrackPlayer.addEventListener('remote-stop', () => {
    TrackPlayer.stop()
  });

};