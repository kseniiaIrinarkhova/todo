import './App.css'
import { useReducer, useState } from 'react';

//import components
import Form from './components/Form/Form';
import Todo from './components/Todo/Todo';

//import additional data
import { initialState, ACTION } from './services/constant.data';

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState)
  const [title, setTitle] = useState('')

  const todoList = initialState.map((todo) => {
    return <Todo todo={todo} />
  });
  return (
    <>
      <h1>My todo list</h1>
      <Form title={title} setTitle={setTitle} />
      <div className="list">
        {todoList}
      </div>
    </>
  )
}

export default App


//functions

function reducer(state, action) {

}