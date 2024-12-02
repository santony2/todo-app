//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

const App = () => {
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

  const handleDelete = (tIndex) => {
    const newTodoitems = todoitems.filter((item, i) => i !== tIndex);
    //const newTodoitems = todoitems
    //newTodoitems(newTodoitems.splice(tIndex,1)); 
   //setTodoitems(todoitems.filter((item, i) => i !== index));
   //newtodoitems.splice(index,1);
   //alert(tIndex);
   alert(newTodoitems);
   setTodoitems(newTodoitems);
   //setInputValue('')
  };
  
 
  return (
    <div className="App">
       <h1>To Do list</h1>
        <p>
          Here's a list of items for you to do<br />
        </p>
      <form>
      <ul>
        {todoitems.map((todo, index) => {
          return (
            <>
              <li key={index} id={index}>{todo}&nbsp;<button>Edit</button>&nbsp;
                <button key={index} id={index} type="button" onClick={() => handleDelete(index)}>Delete</button></li>
            </>
          );
        })}
        </ul>
        <br />
        <label for="addItem">New items to add<br /></label> 
        <input type="text" id="addItem" value={inputValue}onChange={handleChange}></input>&nbsp;
        <button key="addItem" id="addItemb" type="button" onClick={handleSubmit}>Add To Do</button>
        
        <br />
      </form>
    </div>
  );
}

export default App;
