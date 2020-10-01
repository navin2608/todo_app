import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo'
import Firebase1 from './firebase';

// We can simply add javascript within curly braces {}

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  //when the app loads, we need to listen to the dataase and fetch new todos as they get added/removed
  // console.log(input);
  useEffect(() => {
    //this code here.. fires when the app.js loads
    Firebase1.collection('todos').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc=>doc.data()));
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);
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
