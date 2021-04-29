import React from 'react';


//Este componente nos va servir para poder crear el HTML necesario para nuestra lista

const Todo = ({text, todo, todos, setTodos}) => {

    //Eventos
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    };

    const completeHandler = () => {
      setTodos(todos.map((item) => {
          if(item.id === todo.id){
              return{
                  ...item, completed: !item.completed
              }
          }
          return item;
      }))
    }


    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn" >
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;