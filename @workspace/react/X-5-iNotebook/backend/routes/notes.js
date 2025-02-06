const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

// Fetch all notes
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add a new note
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Title must be at least 3 characters").isLength({ min: 3 }),
    body("description", "Description must be at least 3 characters").isLength({
      min: 3,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// Update an existing note
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;

    // Create an object with the updated fields
    const newNote = {};
    if (title) newNote.title = title;
    if (description) newNote.description = description;
    if (tag) newNote.tag = tag;

    // Find the note to update
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

    // Check if the user owns the note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ error: "Not authorized" });
    }

    // Update the note
    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );

    res.json(note);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// delete an existing note

router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;

    // Create an object with the updated fields
    const newNote = {};
    if (title) newNote.title = title;
    if (description) newNote.description = description;
    if (tag) newNote.tag = tag;

    // Find the note to delete
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

    // Check if the user owns the note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ error: "Not authorized" });
    }

    // Update the note
    note = await Notes.findByIdAndDelete(req.params.id);

    res.json({ success: "note has been deleted", note: note });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
