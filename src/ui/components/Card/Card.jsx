import React from 'react';

const Card = props => {
    const {className, children, ...props} = props;
    return (
        <li className={className} {...props}>
            {children}
        </li>
    );
};

export default Card;