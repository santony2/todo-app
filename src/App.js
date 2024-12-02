//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [todoitems, setTodoitems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  
  function handleChange(e){
    setInputValue(e.target.value)
  }
  
  function handleSubmit(e){
    e.preventDefault()
    setTodoitems([...todoitems, inputValue])
    setInputValue('')
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
      <form><br />
        {todoitems.map((todo) => (
        <><input type="checkbox" id={todo} name={todo} value={todo}></input><label>{todo}&nbsp;</label>
         <button>Edit</button>&nbsp;
         <button>Delete</button><br/>
        </>
        ))}
        <br />
        <input type="text" value={inputValue} onChange={handleChange}></input>
        <button onClick={handleSubmit}>Add To Do</button>
        <br />
      </form>
      </body>
    </div>
  );
}

export default App;
