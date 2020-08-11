import React, { useState, FC } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from './actions';

const NewNote: FC = () => {
  const [ note, setNote ] = useState('')
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value)
  }
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(addNote(note));
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