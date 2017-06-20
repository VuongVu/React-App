import React from 'react';
import PropTypes from 'prop-types';

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

Button.defaultProps = {
  className: ''
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Button;