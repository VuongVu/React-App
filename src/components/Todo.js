import React from 'react';

const Todo = (props) => {
  return (
    <div>
      {props.todo.isDone ? <strike>{props.todo.text}</strike> : <span>{props.todo.text}</span> }
    </div>
  );
};

export default Todo;