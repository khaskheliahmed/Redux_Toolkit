import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { addTodo, removeTodo } from './config/redux/reducers/todoSlice';
import { addTodo, removeTodo } from './Config/Reducers/TodoSlice'

const App = () => {
  const input = useRef()

  // data bulaya haa
  const selector = useSelector(state => state.todos.todos);
  console.log(selector);

  // data bhejna ka liya
  const dispatch = useDispatch()

  const addData = (event) => {
    event.preventDefault();
    console.log(input.current.value);
     

    dispatch(addTodo({
      title: input.current.value,
      
    }))
  }


  const deleteTodo = (index)=>{
    console.log(index);
    dispatch(removeTodo({
      index
    }))
    
  }

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={addData}>
        <input type="text" placeholder='enter todo' ref={input} />
        <button type='submit'>add Todo</button>
      </form>
      <ol>
        {selector.length > 0 ? selector.map((item, index) => {
          return <li key={item.id}>{item.title}
            <button onClick={() => deleteTodo(index)}>delete</button>
            <button>edit</button>
          </li>
        }) : <h1>No item found.</h1>}
      </ol>
    </>
  )
}

export default App
