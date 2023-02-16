import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            <>
                <li className={this.props.className} {...this.props}>
                    {this.props.children}
                </li>
            </>
        );
    }
}

export default Card;