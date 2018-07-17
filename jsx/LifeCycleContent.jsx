class LifeCycleContent extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {
      counter: 0,
      currentTime: (new Date()).toLocaleString()
    }
  }
  
  launchClock() {
    setInterval(() => {
      this.setState({
        counter: ++this.state.counter,
        currentTime: (new Date()).toLocaleString()
      });
    }, 1000);
  }
  
  render() {
    if(this.state.counter > 2) return <div>Logger was removed</div>
    return <Logger time={this.state.currentTime}></Logger>
  }
}

ReactDOM.render(
  <LifeCycleContent />,
  document.getElementById('lifeCycleContent')
);