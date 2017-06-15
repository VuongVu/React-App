import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoListContainer from './TodoListContainer';
import reducer from '../reducers/reducer';
import '../styles/App.css';

class App extends Component {
  render() {
    const store = createStore(reducer);

    return (
      <div> 
        <Provider store={store}>
          <TodoListContainer />        
        </Provider>
      </div>
    );
  }
}

export default App;
