class HelloWorld extends React.Component {
  render() {
    return React.createElement(
      'h1',
      this.props,
      'Hello ' + this.props.frameworkName + ' world!!'
    );
  }
}

ReactDOM.render(
  React.createElement(
    'div',
    null,
    React.createElement(HelloWorld, {
      id: 'ember',
      frameworkName: 'Ember.js',
      title: 'A framework for creating ambitious web applications.'
    }),
    React.createElement(HelloWorld, {
      id: 'backbone',
      framworkName: 'Backbone.js',
      title: 'Backbon.js gives structure to web applications...'
    }),
    React.createElement(HelloWorld, {
      id: 'angular',
      frameworkName: 'Angualr.js',
      title: 'Superheroic JavaScript MVW Framwork'
    })
  ),
  document.getElementById('content')
);