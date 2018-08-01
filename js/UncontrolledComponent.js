class UncontrolledComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textbook: '',
            title: 'React Quickly'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({ textbook: event.target.value });
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement('input', {
                type: 'text',
                onChange: this.handleChange,
                placeholder: 'Eloquent TypeScript: Myth or Reality' }),
            React.createElement('br', null),
            React.createElement(
                'span',
                null,
                this.state.textbook
            ),
            React.createElement('input', { type: 'text', name: 'new-book-title', defaultValue: this.state.title })
        );
    }
}

ReactDOM.render(React.createElement(UncontrolledComponent, null), document.getElementById('uncontrolledContent'));
