let secondsLeft = 5;

let interval = setInterval(() => {
  if (secondsLeft == 0) {
    ReactDOM.render(React.createElement(
      'div',
      null,
      'Note was removed after ',
      secondsLeft,
      ' seconds.'
    ), document.getElementById('noteContent'));
    clearInterval(interval);
  } else {
    ReactDOM.render(React.createElement(
      'div',
      null,
      React.createElement(Note, { secondsLeft: secondsLeft })
    ), document.getElementById('noteContent'));
  }
  secondsLeft--;
}, 1000);
