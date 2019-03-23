import React from 'react';
import classes from './Todolist.module.css';
import Todo from './Todo/Todo';

const todoList = (props) => {
  let todos = props.data.map((todo) => {
    return <Todo
              name={todo.name}
              description={todo.description}
              key={todo.id}
              id={todo.id}
              click={(e) => {
                props.click(e)
              }}
              />
  })
  return (
    <div className={classes.listContainer}>
      <ul className={classes.row}>
        <li>Name</li>
        <li>Description</li>
        <li>Delete</li>
      </ul>
      <hr/>
      {todos}
    </div>
  )
}

export default todoList;