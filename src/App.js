import React, {Component} from 'react';
import './styles/App.css';

// Importando componentes
import TodoBox from './components/TodoBox';
import TodoList from './components/TodoList';

class App extends Component {
    constructor() {
        super();

        // El arreglo que se va a pasar al todoList
        this.state = {
            todoItems: []
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    // onSubmit
    onSubmit(e) {
        // Adicionamos el nuevo valor a las items
        let todoListValue = this.refs.todobox.getInputValue();
        let newTodoItemsValue = this.state.todoItems.concat(todoListValue);
        this.setState({
            todoItems: newTodoItemsValue
        });
    }

    render() {
        return (<div className="App">
            <TodoBox ref="todobox" onSubmit={this.onSubmit}/>
            <TodoList ref="todolist" items={this.state.todoItems}/>
        </div>);
    }
}

export default App;
