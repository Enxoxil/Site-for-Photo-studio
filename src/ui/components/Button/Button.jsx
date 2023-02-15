import React, {Component} from 'react';

class Button extends Component {
    render() {
        return (
            <button className={this.props.classNames}>
                {this.props.name}
            </button>
        );
    }
}

export default Button;