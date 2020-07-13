import React, { useState, FC } from 'react';

interface Props {
  addNote(note: string): void
}

const NewNote: FC<Props> = ({addNote}) => {
  const [ note, setNote ] = useState('')
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value)
  }

  const onClickHandler = () => {
    addNote(note);
    setNote('');
  }

  return (
    <>
      <input type="text" name='note' placeholder='note' value={note} onChange={onChange} />
      <button onClick={onClickHandler}>Add note</button>
    </>
  )
}

export default NewNote;