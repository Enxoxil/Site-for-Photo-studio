import React, {Component} from 'react';

class Form extends Component {
    onSubmitHandler = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const {email, name, tel} = Object.fromEntries(data);
        this.props.formHandler({email, name, tel});
    }

    render() {
        const {className} = this.props;
        return (
            <form onSubmit={this.onSubmitHandler} className={className}>
                {this.props.children}
            </form>
        );
    }
}

export default Form;
