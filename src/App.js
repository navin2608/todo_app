import React, { useState } from 'react';

import './App.css';

// We can simply add javascript within curly braces {}

function App() {
  const [todos, setTodos] = useState(['wake up{1 + 1}', 'watering the plants'])
  const [input, setInput] = useState('')
  console.log(input);

  return (
    <div className="App">
      <h1> hello navin </h1>
      <input value={input} onChange={event => setInput(event.target.value)} />

      <button>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))
        }

      </ul>



    </div>
  );
}

export default App;
