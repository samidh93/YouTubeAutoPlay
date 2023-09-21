function clickButtonWhenAvailable() {
  const button = document.querySelector("#confirm-button > yt-button-shape > button") 

  if (button) {
    button.click();
    clearInterval(checkInterval); // Stop checking once the button is clicked
  }
}

const checkInterval = setInterval(clickButtonWhenAvailable, 1000); // Check every 1 second
