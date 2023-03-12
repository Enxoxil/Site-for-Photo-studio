import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onSubmitHandler(e) {
        e.preventDefault();
        //Take handler or Redux
        const data = new FormData(e.target);
        this.props.formHandler(data);
        console.log(Object.fromEntries(data))
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                {this.props.children}
            </form>
        );
    }
}

export default Form;
