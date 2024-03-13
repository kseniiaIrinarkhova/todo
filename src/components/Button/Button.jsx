import './Button.css'
import { BTN_TYPE } from '../../services/constant.data'

export default function Button({ children, dispatch_attr,  dispatch, isDisabled=false,  type}) {
    const buttonEl = type === BTN_TYPE.SUBMIT ?
        <button disabled={isDisabled} type={type}>{children}</button> :
        <button disabled={isDisabled} type={type} onClick={(e) => { dispatch(dispatch_attr) }}>{children}</button>;
  return buttonEl; 
  
}
