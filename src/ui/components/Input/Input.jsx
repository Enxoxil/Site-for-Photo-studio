import React from 'react';

const Input = (props) => {
  const {
    id, label, name, onChangeHandler 
  } = props;
  return (
      <>
          {label
            ? (
                <label htmlFor={id}>
                    {label}
                </label>
            )
            : null}
          <input
            name={name}
            id={id}
            onChange={onChangeHandler}
            {...props}
          />
      </>
  );
};

export default Input;
