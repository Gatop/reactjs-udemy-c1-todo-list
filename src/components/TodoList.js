import React, {Component} from 'react';
import '../styles/TodoList.css';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

class TodoList extends Component {
    constructor(props) {
        super(props);
        // Estados
        this.state = {
            items: this.props.items
        }
    }

    // Cada vez que ingresan nuevas props este metodo es llamado
    componentWillReceiveProps(nextProps) {
        if (nextProps.items.length != this.state.items.length) {
            this.setState({
                items: nextProps.items
            });
        }
    }

    render() {
        // Itero todos los valores del arreglo
        let items = this.state.items.map((currentValue, index, array)=>{
            return(
                <TodoListItem key={index} name={currentValue}/>
            );
        });
        return (
            <div className="TodoList">
                <ul className="TodoListUl">
                    {items}
                </ul>
            </div>
        );
    }
}

TodoList.propTypes = {
    items: PropTypes.array.isRequired
}

export default TodoList;
