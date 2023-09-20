function clickPlayButtonWhenPaused() {
  const videoPlayer = document.querySelector('.html5-video-player'); // Selector for YouTube's video player

  if (videoPlayer) {
    const isPaused = videoPlayer.paused;

    if (isPaused) {
      const playButton = document.querySelector('.ytp-play-button'); // Selector for YouTube's play button
      if (playButton) {
        playButton.click();
      }
    }
  }
}

const checkInterval = setInterval(clickPlayButtonWhenPaused, 1000); // Check every 1 second
