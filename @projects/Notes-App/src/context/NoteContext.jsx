import React, { createContext, useState } from 'react';

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
    const [notes, setNotes] = useState([]); // State to hold notes
    const API_URL = "http://localhost:8081/api/notes"; // API URL for notes

    // Fetch all notes
    const getNotes = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setNotes(data); // Update state with fetched notes
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    };

    // Add a new note
    const addNote = async (note) => {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(note)
            });
            const newNote = await response.json();
            setNotes([...notes, newNote]); // Update state with new note
        } catch (error) {
            console.error("Error adding note:", error);
            throw error;
        }
    };

    // Delete a note by ID
    const deleteNote = async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, { 
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });

            if (!response.ok) {
                throw new Error('Failed to delete note');
            }

            // Update state after successful deletion
            setNotes(notes.filter(note => note.id !== id));
        } catch (error) {
            console.error("Error deleting note:", error);
            throw error;
        }
    };

    // Edit an existing note
    const editNote = async (id, title, description, tag) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, description, tag })
            });
            const updatedNote = await response.json();

            // Update state with the edited note
            setNotes(notes.map(note => 
                note.id === id ? { ...note, title, description, tag } : note 
            ));
        } catch (error) {
            console.error("Error updating note:", error);
            throw error;
        }
    };

    return (
        <NoteContext.Provider value={{ notes, getNotes, addNote, deleteNote, editNote }}>
            {children}
        </NoteContext.Provider>
    );
};

export default NoteContext;
