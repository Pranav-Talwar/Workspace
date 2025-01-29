const mongoose = require("mongoose");
const NotesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  descripton: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: "general",
  },
  date: {
    type: Date,
    default: date.now,
  },
});
module.exports = mongoose.model("user", NotesSchema);
