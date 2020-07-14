import React from 'react';
import NewNote from './NewNote'
import { useDispatch, useSelector } from 'react-redux';
import { NotesState } from './notesReducer';

function App() {
  const notes = useSelector<NotesState, NotesState['notes']>((state) => state.notes)
  const dispatch = useDispatch();
  const addNote = (note: string) => {
    dispatch({type: 'ADD_NOTE', payload: note})
  }
  return (
    <>
      <NewNote addNote={addNote} />
      <hr/>
      <ul>
        {notes.map((note) => <li key={note}>{note}</li>)}
      </ul>
    </>
  );
}

export default App;
