import React from 'react';
import NewNote from './NewNote'
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const addNote = (note: string) => {
    dispatch({type: 'ADD_NOTE', payload: note})
  }
  return (
    <>
      <NewNote addNote={addNote} />
      <hr/>
      <ul>
        <li>Some note</li>
      </ul>
    </>
  );
}

export default App;
