import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ value, onChange, onSubmit, children }) => {
  let input;

  return (
    <form onSubmit={onSubmit}>
      <input 
        type='text'
        value={value}
        onChange={onChange}
        ref={(node) => { input = node }}
      />
      <button type='submit'>
        {children}
      </button>
    </form>
  );
}

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Search;