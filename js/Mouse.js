class Mouse extends React.Component {
  handleMouseOver(event) {
    console.log('mouse is over with event');
    console.log(event);
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        {
          style: { border: '1px solid red' },
          onMouseOverCapture: (event => {
            console.log('mouse over on capture event');
            console.dir(event, this);
          }).bind(this),
          onMouseOver: this.handleMouseOver.bind(this) },
        'Open DevTools and move your mouse cursor over here'
      )
    );
  }
}

ReactDOM.render(React.createElement(Mouse, null), document.getElementById('mouseContent'));
