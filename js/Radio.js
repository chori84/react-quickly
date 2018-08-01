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
        this.setState({ radioGroup: obj });
    }

    render() {
        return React.createElement(
            "form",
            null,
            React.createElement("input", { type: "radio",
                name: "radioGroup",
                value: "angular",
                id: "radioAngular",
                checked: this.state.radioGroup['angular'],
                onChange: this.handleRadio }),
            " ",
            React.createElement(
                "label",
                { htmlFor: "radioAngular" },
                "Angular"
            ),
            React.createElement("br", null),
            React.createElement("input", { type: "radio",
                name: "radioGroup",
                value: "react",
                id: "radioReact",
                checked: this.state.radioGroup['react'],
                onChange: this.handleRadio }),
            " ",
            React.createElement(
                "label",
                { htmlFor: "radioReact" },
                "React"
            ),
            React.createElement("br", null),
            React.createElement("input", { type: "radio",
                name: "radioGroup",
                value: "polymer",
                id: "radioPolymer",
                checked: this.state.radioGroup['polymer'],
                onChange: this.handleRadio }),
            " ",
            React.createElement(
                "label",
                { htmlFor: "radioPolymer" },
                "Polymer"
            )
        );
    }
}
