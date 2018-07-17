class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      githubName: 'chori84',
      books: ['pro express.js', 'practical node.js', 'rapid prototyping with js']
    };
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
    return React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Your REST API URL is: ',
        React.createElement(
          'a',
          { href: this.getUrl() },
          this.getUrl()
        )
      )
    );
  }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('urlContent'));
