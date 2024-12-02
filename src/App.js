//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [todoitems, setTodoitems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [newtodoitems, setnewTodoitems] = useState([]);
  
  function handleChange(e){
    setInputValue(e.target.value)
  }
  
  function handleSubmit(e){
    e.preventDefault()
    setTodoitems([...todoitems, inputValue])
    setInputValue('')
  }

  const handleDelete = (index) => {
   //setnewTodoitems ([...todoitems]); 
   //setTodoitems(todoitems.splice(index,1)); 
   setTodoitems(todoitems => todoitems.filter((item, i) => i !== index));
   //newtodoitems.splice(index,1);
   alert("index :",{index});
   alert(todoitems);
   //setTodoitems(newtodoitems);
  }
  
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do list</h1>
        <p>
          Here's a list of items for you to do
        </p>
      </header>
      <body className="App-body">
      <form><br /><ul>
        {todoitems.map((todo, index) => (
        <>
         <li>{todo}&nbsp;<button>Edit</button>&nbsp;
         <button id={index} value={index} onClick={() =>handleDelete(index)}>Delete</button><br/></li>
        </>
        ))}
        </ul>
        <br />
        <input type="text" value={inputValue} onChange={handleChange}></input>&nbsp;
        <button onClick={handleSubmit}>Add To Do</button>
        
        <br />
      </form>
      </body>
    </div>
  );
}

export default App;
