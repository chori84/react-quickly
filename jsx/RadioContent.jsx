class RadioContent extends React.Component {
  render() {
    return <div>
      <Radio
        order={1}
        name={'resize-radio'}
        id={'react-radio'}
        label={'Resize Radio'}
      />
    </div>
  }
}

ReactDOM.render(
  <RadioContent />,
  document.getElementById('radioContent')
);