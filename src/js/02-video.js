import Player from '@vimeo/player';

const throttle = require( 'lodash.throttle' );
const iframe = document.querySelector( 'iframe' );
const player = new Player(iframe);

player.setCurrentTime( localStorage.getItem('videoplayer-current-time') ?? 0);

player.on( 'timeupdate', throttle(checkTime, 1000));

function checkTime( event ) {
  localStorage.setItem("videoplayer-current-time", JSON.stringify(event.seconds))
  console.log(event.seconds);
}
