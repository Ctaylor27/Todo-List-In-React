import React from 'react';
import classes from '../Todolist.module.css';
const todo = (props) => {
  let del = props.click;
  return (
    <ul className={classes.row}>
      <li>{props.name}</li>
      <li>{props.description}</li>
      <li><button className={classes.buttonStyle} onClick={()=> {del(props.id)}}>X</button></li>
    </ul>
  )
}

export default todo;