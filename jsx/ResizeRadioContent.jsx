class ResizeRadioContent extends React.Component {
  render() {
    return <div>
      <ResizeRadio
        order={1}
        name={'resize-radio'}
        id={'react-radio'}
        label={'Resize Radio'}
      />
    </div>
  }
}

ReactDOM.render(
  <ResizeRadioContent />,
  document.getElementById('radioContent')
);