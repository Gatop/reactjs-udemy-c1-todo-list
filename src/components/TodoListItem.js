import React, {Component} from 'react';
import '../styles/TodoListItem.css';
import PropTypes from 'prop-types';

class TodoListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="TodoListItem">
                {this.props.name}
            </li>
        );
    }
}

// Propiedades requeridas
TodoListItem.propTypes = {
    name: PropTypes.string.isRequired
}

export default TodoListItem;
