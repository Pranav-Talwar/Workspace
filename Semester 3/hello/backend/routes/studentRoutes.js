const express = require('express');
const {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} = require('../controllers/studentController');

const router = express.Router();

// POST - Create a new student
router.post('/students', createStudent);

// GET - Retrieve all students
router.get('/students', getAllStudents);

// GET - Retrieve a specific student by ID
router.get('/students/:id', getStudentById);

// PUT - Update an existing student by ID
router.put('/students/:id', updateStudent);

// DELETE - Delete a student by ID
router.delete('/students/:id', deleteStudent);

module.exports = router;
