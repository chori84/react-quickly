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
        let selectedValue = event.target.value,
            values = Object.assign(this.state.multiSelectedValue);

        if (values.indexOf(selectedValue) > -1) {
            values = values.filter(v => v !== selectedValue);
        } else {
            values.push(selectedValue);
        }

        this.setState({ multiSelectedValue: values });
    }

    handleSelectChange(event) {
        this.setState({ selectedValue: event.target.value });
    }

    render() {
        return React.createElement(
            "form",
            null,
            React.createElement(
                "select",
                {
                    value: this.state.selectedValue,
                    onChange: this.handleSelectChange },
                React.createElement(
                    "option",
                    { value: "ruby" },
                    "Ruby"
                ),
                React.createElement(
                    "option",
                    { value: "node" },
                    "Node"
                ),
                React.createElement(
                    "option",
                    { value: "python" },
                    "Python"
                )
            ),
            React.createElement("br", null),
            React.createElement(
                "select",
                {
                    multiple: true,
                    value: this.state.multiSelectedValue,
                    onClick: this.handleMultiSelectClick },
                React.createElement(
                    "option",
                    { value: "meteor" },
                    "Meteor"
                ),
                React.createElement(
                    "option",
                    { value: "react" },
                    "React"
                ),
                React.createElement(
                    "option",
                    { value: "jquery" },
                    "jQuery"
                )
            )
        );
    }
}
