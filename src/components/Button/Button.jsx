import './Button.css'
import { BTN_TYPE } from '../../services/constant.data'

export default function Button({ children, action, id, dispatch, isDisabled=false,  type}) {
    const buttonEl = type === BTN_TYPE.SUBMIT ?
        <button disabled={isDisabled} type={type}>{children}</button> :
        <button disabled={isDisabled} type={type} onClick={(e) => { dispatch({ type: action, payload: { id: id } }) }}>{children}</button>;
  return buttonEl; 
  
}
