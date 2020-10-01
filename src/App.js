import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';

// We can simply add javascript within curly braces {}

function App() {
  const [todos, setTodos] = useState(['wake up{1 + 1}', 'watering the plants'])
  const [input, setInput] = useState('')
  console.log(input);
  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault();     // will stop the REFRESH
    console.log('i am working');
    setTodos([...todos, input]);
    setInput('');   //clear up the contents in the text field
  }

  return (
    <div className="App">
      <h1> hello navin </h1>
      <FormControl>
        <InputLabel> Write a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>
          Primary
        </Button>
        {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
        <ul>
          {todos.map(todo => (
            <li>{todo}</li>
          ))
          }

        </ul>
      </FormControl>



    </div>
  );
}

export default App;
