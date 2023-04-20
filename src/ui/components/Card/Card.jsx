import React, {Component} from 'react';

class Card extends Component {
    render() {
        const {className, children, ...props} = this.props;
        return (
                <li className={className} {...props}>
                    {children}
                </li>
        );
    }
}

export default Card;