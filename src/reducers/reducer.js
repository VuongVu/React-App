import { List, Map } from 'immutable';

const init = List([]);

export default (todos=init, action) => {
  switch(action.type) {
    case 'ADD_TODO': 
      return todos.push(Map(action.payload));
    case 'TOGGLE_TODO':
      return todos.map((todo) => {
        if (todo.get('id') === action.payload) {
          return todo.update('isDone', isDone => !isDone);
        } else {
          return todo;
        }
      });
    default:
      return todos;
  }
};