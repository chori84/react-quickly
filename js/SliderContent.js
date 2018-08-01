class SliderContent extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(SliderValue, null),
      React.createElement(SliderButtons, null)
    );
  }
}

ReactDOM.render(React.createElement(SliderContent, null), document.getElementById('sliderContent'));
