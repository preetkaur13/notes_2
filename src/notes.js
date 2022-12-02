import React, { useState, useEffect } from "react";

function NotesApp() {
  const [task, setTask] = useState("");
  const [Notes, setNotes] = useState([
    "Pooja",
    "Harshita",
    "Lajja",
    "Preet",
    "Bhavesh",
    "Rehan",
    "Karan"
  ]);

  function createNote() {}
  function enterKeyCheck() {}
  return (
    <div>
      <h1>Notes</h1>
      <input type="text" />
      <button onClick={createNote}>Add</button>
      <ul>
        {Notes.map((Note) => {
          return <li>{Note}</li>;
        })}
      </ul>
    </div>
  );
}
export default NotesApp;
