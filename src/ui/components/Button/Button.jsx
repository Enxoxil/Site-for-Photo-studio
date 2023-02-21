import React, {Component} from 'react';

class Button extends Component {
    render() {
        return (
            <button className={this.props.className} id={this.props.id}>
                {(this.props.children)}
            </button>
        );
    }
}

export default Button;