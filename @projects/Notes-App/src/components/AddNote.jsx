import React, { useState, useContext } from 'react';
import NoteContext from '../context/NoteContext';

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  // State to manage note details and form submission status
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Basic validation: Ensure title and description have at least 3 characters
    if (note.title.length < 3 || note.description.length < 3) {
      setError("Title and Description must be at least 3 characters long.");
      return;
    }

    // Set loading state and try to add the note
    setIsSubmitting(true);
    try {
      await addNote({
        title: note.title,
        description: note.description,
        tag: note.tag || "default"
      });

      // Reset form after successful submission
      setNote({ title: "", description: "", tag: "default" });
    } catch (err) {
      setError(err.message || "Failed to add note. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Update state as user types in form fields
  const onChange = (e) => {
    setNote(prevNote => ({
      ...prevNote,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      {/* Show error message if validation fails or note cannot be added */}
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        {/* Title input field */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={note.title}
            onChange={onChange}
            minLength={3}
            required
          />
        </div>

        {/* Description input field */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={note.description}
            onChange={onChange}
            minLength={3}
            required
          />
        </div>

        {/* Tag input field (optional) */}
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={onChange}
          />
        </div>

        {/* Submit button with loading state */}
        <button type="submit" className="btn btn-secondary" disabled={isSubmitting}>
          {isSubmitting ? 'Adding...' : 'Add Note'}
        </button>
      </form>
    </div>
  );
};

export default AddNote;
