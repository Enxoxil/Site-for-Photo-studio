import React, {Component} from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {className, id, children} = this.props;
        return (
            <button className={className} id={id}>
                {(children)}
            </button>
        );
    }
}

export default Button;