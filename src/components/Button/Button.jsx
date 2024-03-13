import './Button.css'
import { BTN_TYPE } from '../../services/constant.data'

export default function Button({ children, dispatch_attr, dispatch, isDisabled = false, type }) {

    return <button
        disabled={isDisabled}
        type={type}
        className={type}
        onClick={(e) => { if (type === BTN_TYPE.BUTTON) dispatch(dispatch_attr) }}
    >
        {children}
    </button>;
}
