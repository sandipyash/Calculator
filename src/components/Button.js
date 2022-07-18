import React from 'react';
import classes from './Button.module.css';
function Button({value,handler}) {
  return (
   <div className={value=="c" || value=="="?`${classes.btns} ${classes.calBtns}`:classes.btns} onClick={()=>handler(value)}>
      {value}
   </div>
  )
}

export default Button