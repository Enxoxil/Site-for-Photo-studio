import React, {Component} from 'react';

class Tel extends Component {
    render() {
        const {tel, className, id, children} = this.props;
        return (
                <a href={`tel:${tel}`} className={className} id={id}>
                    {(children) ? (<>{children}</>) : (tel)}
                </a>
        );
    }
}

export default Tel;