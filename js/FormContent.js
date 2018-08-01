class FormContent extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(Radio, null),
            React.createElement('br', null),
            React.createElement(Checkbox, null),
            React.createElement('br', null),
            React.createElement(Select, null)
        );
    }
}

ReactDOM.render(React.createElement(FormContent, null), document.getElementById('checkedContent'));
