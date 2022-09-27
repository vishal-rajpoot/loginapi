import React, { useState } from 'react'
import { IoMdCloseCircleOutline } from 'react-icons/io'


const Todo = ({ todos, removeTodo }) => {

  return (todos.map((todo, index) => {
    return(
        <div className='faq-row' key={index}>
            <div key={todo.id}>
                
                <table>
                  <tr>
                      <th className='heading'>CATEGORY ID</th>
                      <th className='heading'>CATEGORY NAME</th>
                  </tr>
                  <tr>
                      <td>{todo.inputId}</td>
                      <td>{todo.text}</td>
                  </tr>
              </table>
            </div>
            <div className='icons'>
                <IoMdCloseCircleOutline className='delete-icon' onClick={() => removeTodo(todo.id)}></IoMdCloseCircleOutline>
            </div>

        </div>
    )
    })
  )

}
  

export default Todo