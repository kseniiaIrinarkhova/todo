import './App.css'
import { useReducer } from 'react';

//import components
import Form from './components/Form/Form';
import Todo from './components/Todo/Todo';

//import additional data
import { initialState, ACTION } from './services/constant.data';

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState )
const todoList = initialState.map((todo)=>{
  return <Todo todo={todo} />
});
  return (
    <>
<h1>My todo list</h1>
<Form/>
<div className="list">
  {todoList}
</div>
    </>
  )
}

export default App


//functions

function reducer(state, action){

}