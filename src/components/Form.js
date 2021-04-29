import React from 'react';

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {  //Estas son las props, pero con destructuring aplicado. Dentro del parentesis puede ir props, y despues llamarlo como props.setInputText

    const inputTextHandler = (e) => {
        console.log(e.target.value);  //Obtenemos el valor de lo que se esta ingresando en el input
        setInputText(e.target.value); //Guardamos ese valor que estamos ingresando, para después utilizarlo como quieramos
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            { text: inputText, completed: false, id: Math.random() * 1000},
            ]); //Con esto vamos rellenando el array de objetos creado en el useState
        setInputText(""); //Acá le decimos que cuando le demos clic, nos reinicie el campo, osea que lo limpie
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }


    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="fliter-todo">
                    <option value="all">Todos</option>
                    <option value="completed">Hecho</option>
                    <option value="uncompleted">No hechos</option>
                </select>
            </div>
        </form>
    );
};

export default Form;
