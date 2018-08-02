class PropsContent extends React.Component {
  render() {
    return <div>
      <PropsButton title="Start" />
      <PropsButton />
      <PropsButton title={1} />
      <PropsButton />
      <PropsButton email="not-a-valid-mail" />
      <PropsButton email="hi@azat.co" />
    </div>;
  }
}

ReactDOM.render(
  <PropsContent />,
  document.getElementById('propsContent')
)