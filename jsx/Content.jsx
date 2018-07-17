class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      githubName: 'chori84',
      books: [
        'pro express.js',
        'practical node.js',
        'rapid prototyping with js'
      ]
    }
  }

  componentWillMount() {
    console.log('componentWillMount Content Node = ' + ReactDOM.findDOMNode(this));
  }
  
  componentDidMount() {
    console.dir('componentDidMount Content Node = ' + ReactDOM.findDOMNode(this));
  }
  
  getUrl() {
    return 'http://webapplog.com';
  }
  
  render() {
    return (
      <div>
        <p>Your REST API URL is: <a href={this.getUrl()}>{this.getUrl()}</a></p>
      </div>
    )
  }
}

ReactDOM.render(
  <Content />,
  document.getElementById('urlContent')
);