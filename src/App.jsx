import './App.css'
import { useReducer, useState } from 'react';

//import components
import Form from './components/Form/Form';
import Todo from './components/Todo/Todo';

//import additional data
import { ACTIONS, initialState } from './services/constant.data';
import { todoReducer } from './services/reducer.functions';

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialState)

  const todoList = todos.map((todo) => {
    let todoItem = <div className='list-item' key={todo.id}>{
      ('beenEdited' in todo) ? 
      <Form dispatch={dispatch} todo_title={todo.title} id={todo.id}>Edit</Form> : 
        <Todo todo={todo} dispatch={dispatch} />
      }</div>
    return todoItem;
  });
  return (
    <>
      <h1>My todo list</h1>
      <div className="form-add">
      <Form dispatch={dispatch} >Add</Form>
      </div>
      <div className="list">
        {todoList}
      </div>
    </>
  )
}

export default App
