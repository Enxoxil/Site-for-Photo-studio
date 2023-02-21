import React, {Component} from 'react';

class Mail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {mail, className, children, id} = this.props;
        return (
            <a href={`mailto:${mail}`} className={className} id={id}>
                {(children) ? (<>{children}</>) : (mail)}
            </a>
        );
    }
}

export default Mail;