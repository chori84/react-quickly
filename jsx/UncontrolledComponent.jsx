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
        this.setState({textbook: event.target.value});
    }
    
    render() {
        return <div>
            <input
                type="text"
                onChange={this.handleChange}
                placeholder="Eloquent TypeScript: Myth or Reality" />
            <br />
            <span>{this.state.textbook}</span>
            <input type="text" name="new-book-title" defaultValue={this.state.title} />
        </div>
    }
}

ReactDOM.render(
    <UncontrolledComponent/>,
    document.getElementById('uncontrolledContent')
);