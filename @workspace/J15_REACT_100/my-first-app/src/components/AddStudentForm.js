import React, { useState } from "react";

function AddStudentForm({ onAddStudent }) {
  const [newStudent, setNewStudent] = useState("");

  function handleSubmit (event)  {
    event.preventDefault();
    if (newStudent.trim()) {
      onAddStudent(newStudent.trim());
      setNewStudent(""); 
    }
  };



  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newStudent}
          onChange={(element) => setNewStudent(element.target.value)}
          placeholder="Enter student name"
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudentForm;
