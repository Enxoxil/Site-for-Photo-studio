import React, {Component} from 'react';

class Video extends Component {
    render() {
        return (
            <>
                <video {...this.props} className={this.props.className} id={this.props.id}>
                    {this.props.children}
                </video>
            </>
        );
    }
}

export default Video;