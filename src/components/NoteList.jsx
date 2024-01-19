
const NotesList = ({ notes }) => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">My Notes</h2>

      {notes.length === 0 ? (
        <p>No existing notes.</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note.id} className="mb-4">
              <h3 className="text-xl font-bold">{note.title}</h3>
              <p>{note.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotesList;
