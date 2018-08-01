class ResizeRadioContent extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(ResizeRadio, {
        order: 1,
        name: 'resize-radio',
        id: 'react-radio',
        label: 'Resize Radio'
      })
    );
  }
}

ReactDOM.render(React.createElement(ResizeRadioContent, null), document.getElementById('resizeRadioContent'));
