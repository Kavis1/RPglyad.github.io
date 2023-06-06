function UploadVideo() {
  var playerContainer = document.querySelector('.player_container');
  var videoTitle = document.querySelector('.video_title');

  playerContainer.classList.add('error');
  videoTitle.innerHTML = 'There has been an ERROR :(';
}