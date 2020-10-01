import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo'

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
      <form>
        <FormControl>
          <InputLabel> Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>
            Add Todo
        </Button>
        </FormControl>
      </form>
      {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}

      <ul>
        {todos.map(todo => (
          <Todo text={todo} />
          // <li>{todo}</li>
        ))
        }

      </ul>




    </div>
  );
}

export default App;
