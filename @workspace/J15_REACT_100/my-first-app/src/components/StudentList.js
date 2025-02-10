import React from "react";

function StudentList ({ students })  {
  return (
    <div>
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No student available</p>
      ) : (
        <ul>
          {students.map((student, index) => (
            <li key={index}>{student}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentList;
