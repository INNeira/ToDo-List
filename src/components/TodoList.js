import React from 'react';

//Importando componentes
import Todo from './Todo'

const TodoList = ({todos, setTodos, filteredTodos}) => { //Obtenemos 'todos' desde App.js, en la parte donde renderizamos

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (  //para cada 'todo' del arreglo de 'todos', voy a renderizar un componenete "<Todo />"
                    <Todo 
                        todo={todo} 
                        setTodos={setTodos} 
                        todos={todos} 
                        key={todo.id} 
                        text={todo.text} 
                    /> //obtenemos el valor que queramos de dentro del arreglo
                ))}
            </ul>
        </div>
    )
}

export default TodoList;