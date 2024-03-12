import './Todo.css'
import { ACTIONS } from '../../services/constant.data'
import { useState } from 'react';
export default function Todo({ todo, dispatch }) {
  const [isCompleted, setIsCompleted] = useState(todo.completed)
  function handleToggling(e) {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
    e.target.checked = !isCompleted;
    setIsCompleted((isCompleted) => isCompleted = e.target.checked)
  }

  return (
    <>
      <div className='todo-container'>
        <input id={todo.id} type="checkbox" name="completed" checked={isCompleted} onChange={handleToggling} />
        <label htmlFor={todo.id} className={todo.completed ? "todo completed" : "todo"}>{todo.title}</label>
        <button className='btn'>Edit</button>
        <button className='btn'>Delete</button>
      </div>
    </>
  )
}
