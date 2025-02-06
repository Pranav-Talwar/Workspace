import React, { useState } from "react";
import NoteContext from "./NoteContext";

function NoteState(props) {
const notesInitial =[
  {
      "_id": "67a40e8efd4c2602f83ea871",
      "user": "679fd2c31f9bcb13e28b893d",
      "title": "mytitle",
      "description": "pls wake me ",
      "tag": "personal",
      "date": "2025-02-06T01:21:18.151Z",
      "__v": 0
  },
  {
      "_id": "67a40ea2fd4c2602f83ea873",
      "user": "679fd2c31f9bcb13e28b893d",
      "title": "mytitle",
      "description": "pls wake me ",
      "tag": "personal",
      "date": "2025-02-06T01:21:38.155Z",
      "__v": 0
  }, {
    "_id": "67a40e8efd4c2602f83ea871",
    "user": "679fd2c31f9bcb13e28b893d",
    "title": "mytitle",
    "description": "pls wake me ",
    "tag": "personal",
    "date": "2025-02-06T01:21:18.151Z",
    "__v": 0
},
{
    "_id": "67a40ea2fd4c2602f83ea873",
    "user": "679fd2c31f9bcb13e28b893d",
    "title": "mytitle",
    "description": "pls wake me ",
    "tag": "personal",
    "date": "2025-02-06T01:21:38.155Z",
    "__v": 0
}, {
  "_id": "67a40e8efd4c2602f83ea871",
  "user": "679fd2c31f9bcb13e28b893d",
  "title": "mytitle",
  "description": "pls wake me ",
  "tag": "personal",
  "date": "2025-02-06T01:21:18.151Z",
  "__v": 0
},
{
  "_id": "67a40ea2fd4c2602f83ea873",
  "user": "679fd2c31f9bcb13e28b893d",
  "title": "mytitle",
  "description": "pls wake me ",
  "tag": "personal",
  "date": "2025-02-06T01:21:38.155Z",
  "__v": 0
}, {
  "_id": "67a40e8efd4c2602f83ea871",
  "user": "679fd2c31f9bcb13e28b893d",
  "title": "mytitle",
  "description": "pls wake me ",
  "tag": "personal",
  "date": "2025-02-06T01:21:18.151Z",
  "__v": 0
},
{
  "_id": "67a40ea2fd4c2602f83ea873",
  "user": "679fd2c31f9bcb13e28b893d",
  "title": "mytitle",
  "description": "pls wake me ",
  "tag": "personal",
  "date": "2025-02-06T01:21:38.155Z",
  "__v": 0
}, {
  "_id": "67a40e8efd4c2602f83ea871",
  "user": "679fd2c31f9bcb13e28b893d",
  "title": "mytitle",
  "description": "pls wake me ",
  "tag": "personal",
  "date": "2025-02-06T01:21:18.151Z",
  "__v": 0
},
{
  "_id": "67a40ea2fd4c2602f83ea873",
  "user": "679fd2c31f9bcb13e28b893d",
  "title": "mytitle",
  "description": "pls wake me ",
  "tag": "personal",
  "date": "2025-02-06T01:21:38.155Z",
  "__v": 0
}
]
const [notes, setNotes] = useState(notesInitial)
  return (
    <NoteContext.Provider value={{notes , setNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;
