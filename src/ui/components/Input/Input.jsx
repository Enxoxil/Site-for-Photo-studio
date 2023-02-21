import React, {Component} from 'react';

class Input extends Component {
    render() {
        const {id, label, ...props} = this.props;
        return (
            <>
                <label htmlFor={id}>
                    {label}
                </label>
                <input
                    id={id}
                    {...props}
                />
            </>
        );
    }
}

export default Input;