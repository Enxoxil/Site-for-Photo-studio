import React, {Component} from 'react';

class Input extends Component {
    render() {
        const {id, label, value, onChangeHandler, ...props} = this.props;
        return (
            <>
                <label htmlFor={id}>
                    {label}
                </label>
                <input
                    id={id}
                    value={value}
                    onChange={onChangeHandler}
                    {...props}
                />
            </>
        );
    }
}

export default Input;