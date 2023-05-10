import React from 'react';

const Button = (props) => {
  const {
    className, id, children, onClick 
  } = props;
  return (
      <button className={className} id={id} onClick={onClick}>
          {children}
      </button>
  );
};

export default Button;
