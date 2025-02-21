import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/NoteContext";
import Noteitem from "./Noteitem";
import { Modal } from 'bootstrap';

function Notes() {
  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context;
  const modalRef = useRef(null);
  const [modalInstance, setModalInstance] = useState(null);

  useEffect(() => {
    getNotes();
    
    // Initialize modal once when component mounts
    const modal = new Modal(document.getElementById('exampleModal'), {
      keyboard: false
    });
    setModalInstance(modal);

    // Cleanup on unmount
    return () => {
      if (modalInstance) {
        modalInstance.dispose();
      }
    };
  }, []); 

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "default",
  });

  const updateNote = (currentNote) => {
    setNote({
      id: currentNote.id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });

    if (modalInstance) {
      modalInstance.show();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (note.etitle.length < 3 || note.edescription.length < 3) {
      alert("Title and Description must be at least 3 characters long.");
      return;
    }

    try {
      await editNote(note.id, note.etitle, note.edescription, note.etag);
      if (modalInstance) {
        modalInstance.hide();
      }
      await getNotes();
    } catch (error) {
      console.error("Error updating note:", error);
      alert("Failed to update note. Please try again.");
    }
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref={modalRef}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    onChange={onChange}
                    minLength={3}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                    minLength={3}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-secondary"
                  >
                    Update Note
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <h2>Your Notes</h2>
        <div className="container mx-2">
          {notes.length === 0 && 'No notes to display'}
        </div>
        <div className="row my-3">
          {Array.isArray(notes) && notes.map((note) => (
            <Noteitem 
              key={note.id}
              updateNote={updateNote} 
              note={note} 
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Notes;