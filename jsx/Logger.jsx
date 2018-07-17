class Logger extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  
  componentWillMount() {
    console.log('componentWillMount Run');
  }
  componentDidMount(e) {
    console.log('componentDidMount Run');
    console.log('DOM node: ', ReactDOM.findDOMNode(this));
  }
  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps Run');
    console.log('new properties: ', newProps);
  }
  shouldComponentUpdate(newProps, newState) {
    console.log('shouldComponentUpdate Run');
    console.log('new properties: ', newProps);
    console.log('new state: ', newState);
    
    return true;
  }
  componentWillUpdate(newProps, newState) {
    console.log('componentWillUpdate Run');
    console.log('new properties: ', newProps);
    console.log('new state: ', newState);
  }
  componentDidUpdate(oldProps, oldState) {
    console.log('componentDidUpdate Run');
    console.log('old properties: ', oldProps);
    console.log('old state: ', oldState);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  
  render() {
    return <div>{this.props.time}</div>;
  }
}