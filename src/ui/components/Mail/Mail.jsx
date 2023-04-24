import React from 'react';

const Mail = props => {
    const {mail, className, children, id} = props;
    return (
        <a href={`mailto:${mail}`} className={className} id={id}>
            {(children) ? (<>{children}</>) : (mail)}
        </a>
    );
};

export default Mail;