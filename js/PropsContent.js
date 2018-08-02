class PropsContent extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(PropsButton, { title: "Start" }),
      React.createElement(PropsButton, null),
      React.createElement(PropsButton, { title: 1 }),
      React.createElement(PropsButton, null),
      React.createElement(PropsButton, { email: "not-a-valid-mail" }),
      React.createElement(PropsButton, { email: "hi@azat.co" })
    );
  }
}

ReactDOM.render(React.createElement(PropsContent, null), document.getElementById('propsContent'));
