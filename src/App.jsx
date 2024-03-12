import './App.css'
import { useReducer, useState } from 'react';

//import components
import Form from './components/Form/Form';
import Todo from './components/Todo/Todo';

//import additional data
import { initialState } from './services/constant.data';
import { todoReducer } from './services/reducer.functions';

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialState)

  const todoList = todos.map((todo) => {
    return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
  });
  return (
    <>
      <h1>My todo list</h1>
      <Form dispatch={dispatch} />
      <div className="list">
        {todoList}
      </div>
    </>
  )
}

export default App
