class RadioContent extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Radio, {
        order: 1,
        name: 'resize-radio',
        id: 'react-radio',
        label: 'Resize Radio'
      })
    );
  }
}

ReactDOM.render(React.createElement(RadioContent, null), document.getElementById('radioContent'));
