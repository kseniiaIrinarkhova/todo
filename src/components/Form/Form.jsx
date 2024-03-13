import './Form.css'
import { ACTIONS, BTN_TYPE } from '../../services/constant.data';
import { useState } from 'react';
import Button from '../Button/Button';

export default function Form({dispatch }) {
  //state for input field for todo
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    //do nothing if input is clean
    if(title==='') return true;
    //add new todo
    dispatch({ type: ACTIONS.ADD_TODO, payload: {title: title}  })
    //clean input 
    setTitle('');
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter new todo to list'/>
      <Button type={BTN_TYPE.SUBMIT} >Add</Button>
    </form>
  )
}


