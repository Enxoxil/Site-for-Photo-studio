import React from 'react';
import {useDispatch} from "react-redux";

const Form = function ({formHandler, children, className}) {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const {email, name, tel} = Object.fromEntries(data);
        formHandler({email, name, tel});
    }
    return (
        <form onSubmit={onSubmitHandler} className={className}>
            {children}
        </form>
    );
};

export default Form;
