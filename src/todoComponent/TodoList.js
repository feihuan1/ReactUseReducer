import React from 'react';
import { ACTIONS } from "./Todo"

import classes from "./TodoList.module.css"

export default function TodoList({ todo, dispatch }) {

   const toggleComplete = () => {
    dispatch({type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id}})
   }
   const deleteTodo = () => {
    dispatch({type: ACTIONS.DELETE_TODO, payload: { id: todo.id}})
   }

  return (
    <div className={classes.TodoList} >
      <span style={{color: todo.complete ? '#aaa' : 'black'}}>{todo.name}</span>
      <div>
      <button onClick={toggleComplete}>Toggle</button>
      <button onClick={deleteTodo}>Delete</button>
      </div>
    </div>
  )
}

