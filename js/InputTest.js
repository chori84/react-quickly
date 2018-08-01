class InputTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Mr.'
    };
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    return React.createElement("input", { type: "text", name: "title", value: this.state.title, onChange: this.handleChange.bind(this) });
  }
}

ReactDOM.render(React.createElement(InputTest, null), document.getElementById('inputContent'));
