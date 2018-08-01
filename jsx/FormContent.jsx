class FormContent extends React.Component {
    render() {
        return <div>
            <Radio/>
            <br />
            <Checkbox/>
            <br />
            <Select />
        </div>;
    }
}

ReactDOM.render(
    <FormContent />,
    document.getElementById('checkedContent')
);