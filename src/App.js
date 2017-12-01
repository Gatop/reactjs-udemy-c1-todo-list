import React, { Component } from 'react';
import './styles/App.css';

// Importando componentes
import TodoBox from './components/TodoBox';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
          <TodoBox />
          <TodoList />
      </div>
    );
  }
}

export default App;
