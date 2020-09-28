import TrackPlayer from 'react-native-track-player';

module.exports = async function() {
  let listeners = [
    { event: 'remote-play', action: 'play', log: 'плей(шторка)' },
    { event: 'remote-pause', action: 'pause', log: 'на паузу(шторка)' },
    { event: 'remote-next', action: 'skipToNext', log: 'некст трек(шторка)', catchLog: 'это ласт трек(шторка)' },
    { event: 'remote-previous', action: 'skipToPrevious', log: 'прев трек(шторка)', catchLog: 'это первый трек(шторка)' },
    { event: 'remote-stop', action: 'stop', log: 'плей(шторка)', log: 'стоп(шторка)' },
  ]

  listeners.forEach(({ event = '', action = '', log = '', catchLog = '' })=>{
    if (!TrackPlayer[event]){
      TrackPlayer[event] =  TrackPlayer.addEventListener(event, async () => {
        try {
          await TrackPlayer[action]()
          console.log(log)
        } catch (error) {
          console.log(catchLog)
        }
      });
    }
  });
};
