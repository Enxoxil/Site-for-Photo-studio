import React, {Component} from 'react';

class Input extends Component {
    render() {
        return (
            <>
                <label htmlFor={this.props.id}>
                    {this.props.label}
                </label>
                <input
                    id={this.props.id}
                    {...this.props}
                />
            </>
        );
    }
}

export default Input;