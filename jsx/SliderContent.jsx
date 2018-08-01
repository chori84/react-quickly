class SliderContent extends React.Component {
  render() {
    return <div>
      <SliderValue />
      <SliderButtons />
    </div>;
  }
}

ReactDOM.render(
  <SliderContent />,
  document.getElementById('sliderContent')
);