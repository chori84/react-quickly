class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: 'node',
            multiSelectedValue: []
        };
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleMultiSelectClick = this.handleMultiSelectClick.bind(this);
    }
    
    handleMultiSelectClick(event) {
        let selectedValue = event.target.value, values = Object.assign(this.state.multiSelectedValue);
        
        if(values.indexOf(selectedValue) > -1) {
            values = values.filter(v => v !== selectedValue);
        } else {
            values.push(selectedValue);
        }
        
        this.setState({multiSelectedValue: values});
    }
    
    handleSelectChange(event) {
        this.setState({selectedValue: event.target.value});
    }
    
    render() {
        return <form>
            <select
                value={this.state.selectedValue}
                onChange={this.handleSelectChange}>
                <option value="ruby">Ruby</option>
                <option value="node">Node</option>
                <option value="python">Python</option>
            </select>
            <br />
            <select
                multiple={true}
                value={this.state.multiSelectedValue}
                onClick={this.handleMultiSelectClick}>
                <option value="meteor">Meteor</option>
                <option value="react">React</option>
                <option value="jquery">jQuery</option>
            </select>
        </form>
    }
}