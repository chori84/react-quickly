let secondsLeft = 5;

let interval = setInterval(() => {
  if(secondsLeft == 0) {
    ReactDOM.render(
      <div>
        Note was removed after {secondsLeft} seconds.
      </div>,
      document.getElementById('noteContent')
    );
    clearInterval(interval);
  } else {
    ReactDOM.render(
      <div>
        <Note secondsLeft={secondsLeft} />
      </div>,
      document.getElementById('noteContent')
    );
  }
  secondsLeft--;
}, 1000);