import './Form.css'
import { ACTIONS, BTN_TYPE } from '../../services/constant.data';
import { useState } from 'react';
import Button from '../Button/Button';

export default function Form({ dispatch, todo_title = "", id, children }) {
  //state for input field for todo
  const [title, setTitle] = useState(todo_title);

  function handleSubmit(e) {
    e.preventDefault();
    //do nothing if input is clean
    if (title === '' || title === todo_title) return true;
    if (id) {
      //save changed todo
      dispatch({ type: ACTIONS.SAVE_TODO, payload: { title: title, id: id } })
    }
    else {
      //add new todo
      dispatch({ type: ACTIONS.ADD_TODO, payload: { title: title } })
      //clean input 
      setTitle('');
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        id={id ? id : "add"}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Todo title" />
      <Button type={BTN_TYPE.SUBMIT} >{children}</Button>
    </form>
  )
}


