const EnhancedButton = LoadWebsite(HocButton);
const EnhancedLink = LoadWebsite(HocLink);
const EnhancedLogo = LoadWebsite(HocLogo);

class HocContent extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(EnhancedButton, null),
      React.createElement("br", null),
      React.createElement(EnhancedLink, null),
      React.createElement("br", null),
      React.createElement(EnhancedLogo, null),
      React.createElement("br", null),
      React.createElement("iframe", { id: "frame", src: "", width: "600", height: "500" })
    );
  }
}

ReactDOM.render(React.createElement(HocContent, null), document.getElementById('hocContent'));
