class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.state = {
            checkboxGroup: {
                node: false,
                react: true,
                express: false,
                mongodb: false
            }
        };
    }
    
    handleCheckbox(event) {
        let obj = Object.assign(this.state.checkboxGroup);
        obj[event.target.value] = event.target.checked;
        this.setState({checkboxGroup: obj});
    }
    
    render() {
        return <form>
            <input type="checkbox"
                   name="checkboxGroup"
                   value='node'
                   id='checkboxNode'
                   checked={this.state.checkboxGroup['node']}
                   onChange={this.handleCheckbox} /> <label htmlFor='checkboxNode'>Node</label>
            <br />
            <input type="checkbox"
                   name="checkboxGroup"
                   value='react'
                   id='checkboxReact'
                   checked={this.state.checkboxGroup['react']}
                   onChange={this.handleCheckbox} /> <label htmlFor='checkboxReact'>React</label>
            <br />
            <input type="checkbox"
                   name="checkboxGroup"
                   value='express'
                   id='checkboxExpress'
                   checked={this.state.checkboxGroup['express']}
                   onChange={this.handleCheckbox} /> <label htmlFor='checkboxExpress'>Express</label>
            <br />
            <input type="checkbox"
                   name="checkboxGroup"
                   value='mongodb'
                   id='checkboxMongodb'
                   checked={this.state.checkboxGroup['mongodb']}
                   onChange={this.handleCheckbox} /> <label htmlFor='checkboxMongodb'>Mongodb</label>
        </form>;
        
    }
}