import { useReducer, useState } from "react";
import classes from "./Todo.module.css";
import TodoList from "./TodoList"

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
};

function reducer(state, action) {
   switch(action.type) {
    case ACTIONS.ADD_TODO:
        return [...state, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
        return state.map(todo => {
            if(todo.id === action.payload.id){
                return {...todo, complete: !todo.complete}
            }
            return todo
        });
    case ACTIONS.DELETE_TODO:
        return state.filter(todo => todo.id !== action.payload.id);
    default:
        return state
   }
}

function newTodo(name) {
    return {id: Date.now(), name: name, complete:false}
}

function Todo() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({type: ACTIONS.ADD_TODO, payload:{name: name}});
    console.log(todos)
    setName('')
  }

  return (
    <>
  <form className={classes.Todo} onSubmit={submitHandler}>
    <label htmlFor="addTodo">Add Todo</label>
      <input id="addTodo" type="text" value={name} onChange={ e => setName(e.target.value) } />
      <button>Add</button>
  </form>
    {todos.map(todo => {
       return <TodoList key={todo.id} todo={todo} dispatch={dispatch} />
    })}
  </>
  )
}

export default Todo;
