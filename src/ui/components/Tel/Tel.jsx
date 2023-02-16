import React, {Component} from 'react';

class Tel extends Component {
    render() {
        return (
            <>
                <a href={`tel:${this.props.tel}`} className={this.props.className} id={this.props.id}>
                    {(this.props.children) ? (<>{this.props.children}</>) : (this.props.tel)}
                </a>
            </>
        );
    }
}

export default Tel;