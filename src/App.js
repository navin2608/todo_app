import React, { useState } from 'react';

import './App.css';

function App() {
  const [todos, setTodos] = useState(['exercise','watch clever programmer {1+1}','eating snacks',"navin wants to livestream"]);
  const [input, setInput] = useState('');
  return (
    <div className="App">
      <h1> hello navin </h1>
      <input value={input} onChange={event=> setInput()}  />
      <button> Add Todo </button>
      <ul>
        {todos.map(todo =>(
          <li>{todo}</li>
        ))}
        
      </ul>
    </div>
  );  
}

export default App;
