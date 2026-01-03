
import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [todos,setTodos]=useState([]);
  const inputRef=useRef();
  const addTodo=()=>{
    const text=inputRef.current.value.trim();
    if(!text) return;
    const newItem={completed:false,text};
    setTodos([...todos,newItem]);
    inputRef.current.value=""
  }
  const toggleTodo=(index)=>{
    const newTodos=[...todos];
    newTodos[index].completed=!newTodos[index].completed;
    setTodos(newTodos);

  }
  const onDeleteItem=(index)=>{
    const newTodos=[...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);

  }
  return (
    <div className="App">
    <h1>To Do List</h1>
   <div className='toDoCon'>
 <ul>
  {todos.length === 0 && <p>No todos yet 👀</p>}
      {todos.map(({text,completed},index)=>{
        return( <div  key={index} className='item'>
          <li className={completed?"done":""}
         
           onClick={()=>toggleTodo(index)}
           >{text}</li>
           <span onClick={()=>onDeleteItem(index)}className="trash">❌</span>
           
           
           </div>

      )})}


    </ul>
    <input ref={inputRef} placeholder='enter you want to do .........'></input>
    <button className='add' onClick={addTodo}> Add</button>

   </div>
    </div>
  );
}

export default App;
