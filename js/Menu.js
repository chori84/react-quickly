class Menu extends React.Component {
  render() {
    let menus = ['Home', 'About', 'Services', 'Portfolio', 'Contact us'];

    return React.createElement(
      'div',
      null,
      menus.map((v, i) => {
        return React.createElement(
          'div',
          { key: i },
          React.createElement(Link, { label: v })
        );
      })
    );
  }
}

ReactDOM.render(React.createElement(Menu, null), document.getElementById('menuContent'));
