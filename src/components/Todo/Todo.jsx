import './Todo.css'
import { ACTIONS, BTN_TYPE } from '../../services/constant.data'
import { useState } from 'react';
import Button from '../Button/Button';


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
        <Button type={BTN_TYPE.BUTTON} dispatch={dispatch} dispatch_attr={{ type: ACTIONS.EDIT_TODO, payload: { id: todo.id } }}>Edit</Button>
        <Button type={BTN_TYPE.BUTTON} isDisabled={isDisabled} dispatch={dispatch} dispatch_attr={{ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } }}>Delete</Button>
      </div>
    </>
  )
}
