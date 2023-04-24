import React from 'react';

const Tel = props => {
    const {tel, className, id, children} = props;
    return (
        <a href={`tel:${tel}`} className={className} id={id}>
            {(children) ? (<>{children}</>) : (tel)}
        </a>
    );
};

export default Tel;