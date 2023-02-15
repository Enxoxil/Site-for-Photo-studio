import React, {Component} from 'react';

class Tel extends Component {
    render() {
        return (
            <>
                <a href="tel:+380930930939" className={this.props.classNames} id={this.props.id}>
                    {this.props.tel}
                </a>
            </>
        );
    }
}

export default Tel;