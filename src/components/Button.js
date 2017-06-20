import React from 'react';

const Button = ({ onClick, className, children }) => {
  return (
    <button
      type='button'
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;