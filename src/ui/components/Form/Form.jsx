import React from 'react';

const Form = ({ formHandler, children, className }) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const { email, name, tel } = Object.fromEntries(data);
    formHandler({ email, name, tel });
    e.target.reset();
  };
  return (
      <form onSubmit={onSubmitHandler} className={className}>
          {children}
      </form>
  );
};

export default Form;
