import React, {Component} from 'react';

class Button extends Component {
    render() {
        const {className, id, children, onClick} = this.props;
        return (
            <button className={className} id={id} onClick={onClick}>
                {(children)}
            </button>
        );
    }
}

export default Button;