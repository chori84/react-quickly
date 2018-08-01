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
        this.setState({ checkboxGroup: obj });
    }

    render() {
        return React.createElement(
            "form",
            null,
            React.createElement("input", { type: "checkbox",
                name: "checkboxGroup",
                value: "node",
                id: "checkboxNode",
                checked: this.state.checkboxGroup['node'],
                onChange: this.handleCheckbox }),
            " ",
            React.createElement(
                "label",
                { htmlFor: "checkboxNode" },
                "Node"
            ),
            React.createElement("br", null),
            React.createElement("input", { type: "checkbox",
                name: "checkboxGroup",
                value: "react",
                id: "checkboxReact",
                checked: this.state.checkboxGroup['react'],
                onChange: this.handleCheckbox }),
            " ",
            React.createElement(
                "label",
                { htmlFor: "checkboxReact" },
                "React"
            ),
            React.createElement("br", null),
            React.createElement("input", { type: "checkbox",
                name: "checkboxGroup",
                value: "express",
                id: "checkboxExpress",
                checked: this.state.checkboxGroup['express'],
                onChange: this.handleCheckbox }),
            " ",
            React.createElement(
                "label",
                { htmlFor: "checkboxExpress" },
                "Express"
            ),
            React.createElement("br", null),
            React.createElement("input", { type: "checkbox",
                name: "checkboxGroup",
                value: "mongodb",
                id: "checkboxMongodb",
                checked: this.state.checkboxGroup['mongodb'],
                onChange: this.handleCheckbox }),
            " ",
            React.createElement(
                "label",
                { htmlFor: "checkboxMongodb" },
                "Mongodb"
            )
        );
    }
}
