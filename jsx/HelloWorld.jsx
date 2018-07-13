const HelloWorld = (props) => {
  return <h1 {...props}>Hello {props.frameworkName} world!!</h1>;
}

/*
class HelloWorld extends React.Component {
  render() {
    return <h1 {...this.props}>Hello {this.props.frameworkName} world!!</h1>;
  }
}
*/

ReactDOM.render(
  <div>
    <HelloWorld
      id='ember'
      frameworkNanem='Ember.js'
      title='A framework for creating ambitious web applications.' />
    <HelloWorld
      id='backbone'
      frameworkNanem='Backbone.js'
      title='Backbone.js gives structure to web applications...' />
    <HelloWorld
      id='angular'
      frameworkNanem='Angular.js'
      title='SUperheroic JavaScript MVW Framework' />
  </div>,
  document.getElementById('content')
);