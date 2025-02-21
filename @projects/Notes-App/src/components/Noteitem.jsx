import React, { useContext } from 'react'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import NoteContext from "../context/NoteContext";

function Noteitem({ note, updateNote }) {
    const context = useContext(NoteContext);
    const { deleteNote } = context;

    // Handle note deletion
    const handleDelete = async () => {
        try {
            await deleteNote(note.id); // Call delete function from context
        } catch (error) {
            console.error("Failed to delete note:", error);
            alert("Failed to delete note. Please try again.");
        }
    };

    return (
        <div className="col-md-4 my-2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5> {/* Display note title */}
                    <p className="card-text">{note.description}</p> {/* Display note description */}
                    <p className="badge bg-secondary">{note.tag}</p> {/* Display note tag */}

                    <div className="d-flex justify-content-end">
                        {/* Edit button */}
                        <FontAwesomeIcon
                            icon={faPenToSquare}
                            size="lg"
                            style={{ color: "#FFD43B", cursor: "pointer" }}
                            className="mx-2"
                            onClick={() => updateNote(note)}  // Pass note for editing
                        />

                        {/* Delete button */}
                        <FontAwesomeIcon
                            icon={faTrashCan}
                            size="lg"
                            style={{ color: "#ff0000", cursor: "pointer" }}
                            className="mx-2"
                            onClick={handleDelete}  // Trigger delete function
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Noteitem;
