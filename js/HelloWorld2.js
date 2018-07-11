class HelloWorld extends React.Component {
  render() {
    return React.createElement(
      'h1',
      this.props,
      'Hello ',
      this.props.frameworkName,
      ' world!!'
    );
  }
}

ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(HelloWorld, {
    id: 'ember',
    frameworkNanem: 'Ember.js',
    title: 'A framework for creating ambitious web applications.' }),
  React.createElement(HelloWorld, {
    id: 'backbone',
    frameworkNanem: 'Backbone.js',
    title: 'Backbone.js gives structure to web applications...' }),
  React.createElement(HelloWorld, {
    id: 'angular',
    frameworkNanem: 'Angular.js',
    title: 'SUperheroic JavaScript MVW Framework' })
), document.getElementById('content'));
