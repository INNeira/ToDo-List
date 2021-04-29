import React, { useState, useEffect } from "react";
import './App.css';

//Importando componentes
import Form from './components/Form';
import TodoList from './components/TodoList'

function App() {
  // Estados
  const [inputText , setInputText ] = useState(""); //donde inputText va ser el valor actual que estamos escribiendo
                                                    // y setinputtext va ser la funcion que nos va permitir cambiar el valor actual
  const [todos, setTodos] = useState([]); //en useState declaramos un array, es lo que vamos a usar
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  //useEffect
  useEffect(() =>{
    filterHandler();
  }, [todos, status]);

  //Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className="App">
        <header>
          <h1>ToDO List</h1>
        </header>
        <Form 
          inputText={inputText} 
          todos={todos} 
          setTodos={setTodos} 
          setInputText={setInputText}
          setStatus={setStatus} 
          filteredTodos={filteredTodos}
        />
        <TodoList 
          filteredTodos={filteredTodos} 
          setTodos={setTodos} 
          todos={todos} 
        />
    </div>
  );
}

export default App;
