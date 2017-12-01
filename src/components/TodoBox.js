import React, {Component} from 'react';
import '../styles/TodoBox.css';

class TodoBox extends Component {
    constructor() {
        super();

        this.state = {
            todoText: ''
        };
    }

    render() {
        return (<div className="TodoBox">
            <form>
                <input
                    type="text"
                    value={this.state.todoText}
                    onChange={(e) => {this.setState({ todoText: e.target.value })}}/>
                <input type="submit" value="Agregar"/>
            </form>
        </div>);
    }
}

export default TodoBox;
