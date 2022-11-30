import { useState } from "react";
import Note from "./components/Note";
import notes from "./Data";


const App = () => {
  const [notebook, setNotebook] = useState([]);
  const [newNote, setNewNote] = useState(
    'Write a new note...'
  );
  const [showAll, setShowAll] = useState(true);


  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
    content: newNote,
    date: new Date().toISOString(),
    important: Math.random() < 0.5,
    id: notes.length + 1,
  }

  setNotebook(notes.concat(noteObject))
  setNewNote('')
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  //need to change
  const notesToShow = showAll
    ? notebook
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
