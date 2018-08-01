class Radio extends React.Component {
    constructor(props) {
        super(props);
        this.handleRadio = this.handleRadio.bind(this);
        this.state = {
            radioGroup: {
                angular: false,
                react: true,
                polymer: false
            }
        };
    }
    
    handleRadio(event) {
        let obj = {};
        obj[event.target.value] = event.target.checked;
        this.setState({radioGroup: obj});
    }
    
    render() {
        return <form>
            <input type="radio"
                   name="radioGroup"
                   value='angular'
                   id='radioAngular'
                   checked={this.state.radioGroup['angular']}
                   onChange={this.handleRadio} /> <label htmlFor='radioAngular'>Angular</label>
            <br />
            <input type="radio"
                   name="radioGroup"
                   value='react'
                   id='radioReact'
                   checked={this.state.radioGroup['react']}
                   onChange={this.handleRadio} /> <label htmlFor='radioReact'>React</label>
            <br />
            <input type="radio"
                   name="radioGroup"
                   value='polymer'
                   id='radioPolymer'
                   checked={this.state.radioGroup['polymer']}
                   onChange={this.handleRadio} /> <label htmlFor='radioPolymer'>Polymer</label>
        </form>;
    }
}