import React from 'react';
import Button from './Button';

const Table = ({ list, onDismiss }) => {
  const largeColumn = {
    width: '40%',
  };

  const midColumn = {
    width: '30%',
  };

  const smallColumn = {
    width: '10%',
  };
  return (
    <div className='table'>
      {list.map((item) => {
        return (
          <div key={item.objectID} className='table-row'>
            <span style={largeColumn}>
              <a href={item.url}>{item.title}</a>
            </span>
            <span style={midColumn}>
              {item.author}
            </span>
            <span style={smallColumn}>
              {item.num_comments}
            </span>
            <span style={smallColumn}>
              {item.points}
            </span>
            <span style={smallColumn}>
              <Button
                className='button-inline'
                onClick={() => onDismiss(item.objectID)}
              >
                Dismiss
              </Button>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Table;