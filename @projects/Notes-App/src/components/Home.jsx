import React from "react";
import Notes from "./Notes";
import AddNote from "./AddNote";
export default function Home() {

  return (
    <div>
        <AddNote></AddNote>
        <Notes></Notes>
    </div>
  );
}
