"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.getStudentById = exports.getAllStudents = exports.createStudent = void 0;
const studentModel_1 = require("../models/studentModel");
// Controller function to create a student
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newStudent = new studentModel_1.Student(req.body);
        yield newStudent.save();
        res.status(201).json(newStudent);
    }
    catch (error) {
        res.status(400).json({ message: 'Error creating student', error });
    }
});
exports.createStudent = createStudent;
// Controller function to get all students
const getAllStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield studentModel_1.Student.find();
        res.status(200).json(students);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving students', error });
    }
});
exports.getAllStudents = getAllStudents;
// Controller function to get a student by ID
const getStudentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield studentModel_1.Student.findById(req.params.id);
        if (!student) {
            res.status(404).json({ message: 'Student not found' });
            return;
        }
        res.status(200).json(student);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving student', error });
    }
});
exports.getStudentById = getStudentById;
// Controller function to update a student by ID
const updateStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield studentModel_1.Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!student) {
            res.status(404).json({ message: 'Student not found' });
            return;
        }
        res.status(200).json(student);
    }
    catch (error) {
        res.status(400).json({ message: 'Error updating student', error });
    }
});
exports.updateStudent = updateStudent;
// Controller function to delete a student by ID
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield studentModel_1.Student.findByIdAndDelete(req.params.id);
        if (!student) {
            res.status(404).json({ message: 'Student not found' });
            return;
        }
        res.status(200).json({ message: 'Student deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting student', error });
    }
});
exports.deleteStudent = deleteStudent;
