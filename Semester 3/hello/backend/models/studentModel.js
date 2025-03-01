const mongoose = require('mongoose');

// Define the student schema (blueprint for student data)
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    class: { type: String, required: true },
    section: { type: String, required: true }
});

// Compile the schema into a model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
