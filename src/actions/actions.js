// succinct hack for generating passable unique ids
const uid = () => Math.random().toString(34).slice(2);

const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uid(),
      isDone: false,
      text: text
    }
  };
};

const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  };
};

export { addTodo, toggleTodo };