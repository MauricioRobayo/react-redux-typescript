import React, { useState } from 'react';

export default () => {
  const [ note, setNote ] = useState('')
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value)
  }
  return (
    <>
      <input type="text" name='note' placeholder='note' value={note} onChange={onChange} />
      <button>Add note</button>
    </>
  )
}