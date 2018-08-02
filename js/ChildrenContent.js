class ChildrenContent extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "content" },
      this.props.children
    );
  }
}

ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(
    ChildrenContent,
    null,
    React.createElement(
      "h1",
      null,
      "React"
    ),
    React.createElement(
      "p",
      null,
      "Rocks"
    )
  ),
  React.createElement(
    ChildrenContent,
    null,
    React.createElement("img", { src: "images/azat.jpg", width: "100" })
  ),
  React.createElement(
    ChildrenContent,
    null,
    React.createElement(
      "a",
      { href: "http://react.rocks" },
      "http://react.rocks"
    )
  ),
  React.createElement(
    ChildrenContent,
    null,
    React.createElement(
      "a",
      { className: "btn btn-danger", href: "http://react.rocks" },
      "http://react.rocks"
    )
  )
), document.getElementById('childrenContent'));
