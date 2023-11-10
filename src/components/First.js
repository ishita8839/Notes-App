import React from 'react'
import '../components/First.css'
import image from '../images/notes.png'
import image1 from '../images/add.png'
import image2 from '../images/delete1.png'
import { useState } from 'react';


const First = () => {
    const [notes, setNotes] = useState([]);
  
    const addNote = () => {
      setNotes([...notes, '']);
    };
  
    const deleteNote = (index) => {
      const newNotes = [...notes];
      newNotes.splice(index, 1);
      setNotes(newNotes);
    };
  
    const handleNoteChange = (index, event) => {
      const newNotes = [...notes];
      const cursorPosition = window.getSelection().getRangeAt(0).startOffset;
      const inputValue = event.target.innerText;
      const leftPart = inputValue.substring(0, cursorPosition);
      const rightPart = inputValue.substring(cursorPosition);
      newNotes[index] = leftPart + rightPart;
      setNotes(newNotes);
    };

   
  return (
    <div className="container">
        <h1><img src={image} alt='this is note' />Notes</h1>
        <button className='btn' onClick={addNote}>Create Note<img src={image1} alt="this is plus" /></button>
        <div className="notes-container">
      {notes.map((note, index) => (
        <div key={index} className="input-box">
          <p
            contentEditable={true}
            onInput={(e) => handleNoteChange(index, e)}
            
          >
            {note}
          </p>
          <img
            src={image2}
            alt="Delete"
            onClick={() => deleteNote(index)}
          />
        </div>
      ))}
    </div>
    </div>
  )
}

export default First
