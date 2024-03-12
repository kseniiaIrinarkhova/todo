import './Todo.css'
import { ACTIONS } from '../../services/constant.data'
import { useState } from 'react';
export default function Todo({ todo, dispatch }) {
  //state for checkbox
  const [isCompleted, setIsCompleted] = useState(todo.completed)
  //state for delete button
  const [isDisabled, setIsDisabled] = useState(!todo.completed)

  //event handler for checkbox
  function handleToggling(e) {
    //toggle todo
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
    //set if todo completed or not
    setIsCompleted((state) => state = e.target.checked)
    //set availability of delete button according to the "completed" property of todo
    setIsDisabled((state) => state = !isDisabled)
  }

  return (
    <>
      <div className='todo-container'>
        <input id={todo.id} type="checkbox" name="completed" checked={isCompleted} onChange={handleToggling} />
        <label htmlFor={todo.id} className={todo.completed ? "todo completed" : "todo"}>{todo.title}</label>
        <button className='edit-btn'>Edit</button>
        <button className='delete-btn' disabled={isDisabled} onClick={(e) => { dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } }) }}>Delete</button>
      </div>
    </>
  )
}
