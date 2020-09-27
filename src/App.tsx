import React from 'react';
import NewNote from './NewNote'
import { useSelector } from 'react-redux';
import { NotesState } from './notesReducer';

function App() {
  const notes = useSelector((state: NotesState) => state.notes)
  return (
    <>
      <NewNote/>
      <hr/>
      <ul>
        {notes.map((note) => <li key={note}>{note}</li>)}
      </ul>
    </>
  );
}

export default App;
