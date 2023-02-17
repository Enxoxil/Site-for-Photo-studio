import React, {Component} from 'react';


class Form extends Component {
    render() {
        return (
            <form action="#" className={this.props.className}>
                {this.props.children}
            </form>
        );
    }
}

export default Form;