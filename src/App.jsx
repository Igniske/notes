import './App.css'
import Navbar from './components/Navbar'
import NotesList from './components/NoteList';
import { useState } from 'react';
function App() {
  
  const [notes, setNotes] = useState([
    //{ id: 1, title: 'Note 1', content: 'This is the content of note 1.' },
    //{ id: 2, title: 'Note 2', content: 'This is the content of note 2.' },
  ]);

  return (
    <>
      <Navbar></Navbar>
      <NotesList notes={notes} setNotes={setNotes} />
    </>
  )
}

export default App
