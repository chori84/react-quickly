class ChildrenContent extends React.Component {
  render() {
    return <div className="content">
      {this.props.children}
    </div>;
  }
}

ReactDOM.render(
  <div>
    <ChildrenContent>
      <h1>React</h1>
      <p>Rocks</p>
    </ChildrenContent>
    <ChildrenContent>
      <img src="images/azat.jpg" width="100" />
    </ChildrenContent>
    <ChildrenContent>
      <a href="http://react.rocks">http://react.rocks</a>
    </ChildrenContent>
    <ChildrenContent>
      <a className="btn btn-danger" href="http://react.rocks">http://react.rocks</a>
    </ChildrenContent>
  </div>,
  document.getElementById('childrenContent')
);