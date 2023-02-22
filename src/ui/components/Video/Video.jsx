import React, {Component} from 'react';

class Video extends Component {
    render() {
        const {id ,className,children, ...props} = this.props;
        return (
                <video {props} className={className} id={id}>
                    {children}
                </video>
        );
    }
}

export default Video;