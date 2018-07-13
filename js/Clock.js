class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = { currentTime: new Date().toLocaleString('en') };
  }

  launchClock() {
    setInterval(() => {
      console.log('Updating time...');
      this.setState({
        currentTime: new Date().toLocaleString('en')
      });
    }, 1000);
  }

  render() {
    return React.createElement(
      'div',
      null,
      this.state.currentTime
    );
  }
}

ReactDOM.render(React.createElement(Clock, null), document.getElementById('clockContent'));
