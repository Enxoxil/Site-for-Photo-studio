import React from 'react';

const Video = props => {
    const {id, className, children} = props;
    return (
        <video {...props} className={className} id={id}>
            {children}
        </video>
    );
};

export default Video;