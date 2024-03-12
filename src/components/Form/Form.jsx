import './Form.css'
import { ACTION } from '../../services/constant.data';
import { useState } from 'react';

export default function Form({dispatch }) {
  //state for input field for todo
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    //add new todo
    dispatch({ type: ACTION.ADD_TODO, payload: {title: title}  })
    //clean input 
    setTitle('');
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter new todo to list'/>
    </form>
  )
}


