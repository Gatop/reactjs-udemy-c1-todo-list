import React, {Component} from 'react';
import '../styles/TodoBox.css';
import PropTypes from 'prop-types';

class TodoBox extends Component {
    constructor(props) {
        super(props);

        // Declaracion de estados
        this.state = {
            todoText: ''
        };

        // Bind de metodos
        this.onSubmit = this.onSubmit.bind(this);
        this.getInputValue = this.getInputValue.bind(this);
    }

    // Metodo para obtener el envio del formulario
    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(e);
        this.setState({
            todoText: ''
        });
    }

    // Obtener el valore del input
    getInputValue(){
        return this.state.todoText;
    }

    // Render
    render() {
        return (<div className="TodoBox">
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    value={this.state.todoText}
                    onChange={(e) => {this.setState({ todoText: e.target.value })}}/>
                <input type="submit" value="Agregar"/>
            </form>
        </div>);
    }
}

// Propiedades que vamos a recibir del componente padre
TodoBox.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default TodoBox;
