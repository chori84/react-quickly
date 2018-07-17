class Note extends React.Component {
  confirmLeave(e) {
    let confirmationMessage = 'really close note?';
    e.returnValue = confirmationMessage;
    return confirmationMessage;
  }
  
  componentDidMount() {
    console.log('Add confirmLeave Event Listener at beforeunload event');
    window.addEventListener('beforeunload', this.confirmLeave);
  }
  
  componentWillUnmount() {
    console.log('Remove confirmLeave Event Listener at beforeunload event');
    window.removeEventListener('beforeunload', this.confirmLeave);
  }
  
  render() {
    console.log('Render');
    return <div>
      <p>Parent Component will remove after {this.props.secondsLeft} Sec.</p>
      <input type="text" />
    </div>
  }
}