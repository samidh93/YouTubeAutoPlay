function clickButtonWhenAvailable() {
  const button = document.querySelector('button'); // Replace 'button' with your button selector

  if (button) {
    button.click();
    clearInterval(checkInterval); // Stop checking once the button is clicked
  }
}

const checkInterval = setInterval(clickButtonWhenAvailable, 1000); // Check every 1 second
