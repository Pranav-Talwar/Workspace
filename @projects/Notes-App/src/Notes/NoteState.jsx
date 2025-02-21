import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5ZmQyYzMxZjliY2IxM2UyOGI4OTNkIn0sImlhdCI6MTczODU1OTYxN30._8zOXlIq1RsZou4r2DwsDADt1G3sDIPe0MTUMeu88pQ"
        }
      });
      const json = await response.json();
      console.log(json);
      setNotes(json);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5ZmQyYzMxZjliY2IxM2UyOGI4OTNkIn0sImlhdCI6MTczODU1OTYxN30._8zOXlIq1RsZou4r2DwsDADt1G3sDIPe0MTUMeu88pQ"
        },
        body: JSON.stringify({ title, description, tag })
      });

      const json = await response.json();
      console.log(json);

      if (response.ok) {
        setNotes([...notes, json]); // Add the new note to the state
      } else {
        console.error("Error adding note:", json);
      }
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  // Delete a Note
  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5ZmQyYzMxZjliY2IxM2UyOGI4OTNkIn0sImlhdCI6MTczODU1OTYxN30._8zOXlIq1RsZou4r2DwsDADt1G3sDIPe0MTUMeu88pQ"
        }
      });

      const json = await response.json();
      console.log(json);

      if (response.ok) {
        const newNotes = notes.filter((note) => note._id !== id); // Remove the deleted note
        setNotes(newNotes);
      } else {
        console.error("Error deleting note:", json);
      }
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5ZmQyYzMxZjliY2IxM2UyOGI4OTNkIn0sImlhdCI6MTczODU1OTYxN30._8zOXlIq1RsZou4r2DwsDADt1G3sDIPe0MTUMeu88pQ"
        },
        body: JSON.stringify({ title, description, tag })
      });

      const json = await response.json();
      console.log(json);

      if (response.ok) {
        // Update the note in the state without mutating the original array
        const updatedNotes = notes.map((note) =>
          note._id === id ? { ...note, title, description, tag } : note
        );
        setNotes(updatedNotes);
      } else {
        console.error("Error updating note:", json);
      }
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;