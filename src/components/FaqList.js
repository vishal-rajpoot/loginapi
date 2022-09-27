import React, { useState } from 'react'
import Todo from './Todo';
import FaqForm from './FaqForm';

const FaqList = () => {
    const[todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if(!todo.text || /^\$*$/.test(todo.text)){
            return;
        }

        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        console.log(todo, ...todos)
    }

    const removeTodo =(id) => {
      const removeArr = [...todos].filter( todo => todo.id !==id)

      setTodos(removeArr);
    }


  return (
    <div>
        <h1>FAQ'S </h1>
        <FaqForm onSubmit = {addTodo}/>
        <Todo 
        todos = {todos}
        removeTodo ={removeTodo}        
        />
    </div>
  )
}

export default FaqList