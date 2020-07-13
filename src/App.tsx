import React from 'react';
import NewNote from './NewNote'

function App() {
  return (
    <>
      <NewNote addNote={alert} />
      <hr/>
      <ul>
        <li>Some note</li>
      </ul>
    </>
  );
}

export default App;
