import React, {Component} from 'react';

class Input extends Component {
    render() {
        const {id, label, name, onChangeHandler, ...props} = this.props;
        return (
            <>
                <label htmlFor={id}>
                    {label}
                </label>
                <input
                    name={name}
                    id={id}
                    onChange={onChangeHandler}
                    {...props}
                />
            </>
        );
    }
}

export default Input;