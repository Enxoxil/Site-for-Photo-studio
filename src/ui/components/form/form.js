import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onSubmitHandler(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const {email, name, tel} = Object.fromEntries(data);
        this.props.formHandler({email, name, tel});
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
