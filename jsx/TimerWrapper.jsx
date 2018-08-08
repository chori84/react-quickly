class TimerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: null,
      timer: null
    };
    this.startTimer = this.startTimer.bind(this);
  }
  
  startTimer(timeLeft) {
    clearInterval(this.state.timer);
    let timer = setInterval(() => {
      var timeLeft = this.state.timeLeft - 1;
      if(timeLeft == 0) clearInterval(timer);
      this.setState({timeLeft: timeLeft});
    }, 1000);
    console.log('1: After setInterval');
    return this.setState({timeLeft: timeLeft, timer: timer});
  }
  
  render() {
    return <div className="row-fluid">
      <h2>Timer</h2>
      <div className="btn-group" role="group">
        <TimerButton time="5" startTimer={this.startTimer} />
        <TimerButton time="10" startTimer={this.startTimer} />
        <TimerButton time="15" startTimer={this.startTimer} />
      </div>
      <Timer timeLeft={this.state.timeLeft} />
      <audio id="end-of-time" src="flute_c_long_01.wav" preload="auto"></audio>
    </div>;
  }
}

ReactDOM.render(
  <TimerWrapper />,
  document.getElementById('timerContent')
);