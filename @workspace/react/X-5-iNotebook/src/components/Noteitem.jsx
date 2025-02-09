import React,{useContext} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons"; // Import the trash icon
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"; // Import the pen icon
import NoteContext from "../context/Notes/NoteContext";
function Noteitem(props) {
  const context = useContext(NoteContext);
  const { note,updateNote } = props;
  const { deleteNote } = context;

  return (
    <div className="col-md-4 my-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <p className="badge bg-secondary">{note.tag}</p>

          <div className="d-flex justify-content-end">
            <FontAwesomeIcon
              icon={faPenToSquare}
              size="lg"
              style={{ color: "#FFD43B", cursor: "pointer" }}
              className="mx-2"
              onClick={() => {
                updateNote(note);
              }}
            />

            <FontAwesomeIcon
              icon={faTrashCan}
              size="lg"
              style={{ color: "#ff0000", cursor: "pointer" }}
              className="mx-2"
              onClick={() => {
                deleteNote(note._id);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Noteitem;
