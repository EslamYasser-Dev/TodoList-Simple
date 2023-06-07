import { useState } from "react";
import NoteCard from "./NoteCard";




 const Jobs = () => {

    const [note, setNote] = useState([{id:0,text:''}]);

    const handleAddNewNote = () => {
      setNote(prevNotes => [
          ...prevNotes,
          { id: prevNotes.length + 1, text: '' }
      ]);
  }

  const handleRemoveNote = (id) => {
    note.length > 0? setNote(prevNotes => prevNotes.filter(note => note.id !== id)):alert("refresh");
}

  return (
    note.map((e) => (
      <div key={e.id}>
          <NoteCard text={note.text} remove={() => handleRemoveNote(e.id)} add={handleAddNewNote}></NoteCard>
      </div>
  ))
  )
 }
export default Jobs;