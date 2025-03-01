import { Request, Response } from 'express';
import { Student, IStudent } from '../models/studentModel';

// Controller function to create a student
export const createStudent = async (req: Request, res: Response): Promise<void> => {
    try {
        const newStudent: IStudent = new Student(req.body);
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(400).json({ message: 'Error creating student', error });
    }
};

// Controller function to get all students
export const getAllStudents = async (req: Request, res: Response): Promise<void> => {
    try {
        const students: IStudent[] = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving students', error });
    }
};

// Controller function to get a student by ID
export const getStudentById = async (req: Request, res: Response): Promise<void> => {
    try {
        const student: IStudent | null = await Student.findById(req.params.id);
        if (!student) {
            res.status(404).json({ message: 'Student not found' });
            return;
        }

        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving student', error });
    }
};

// Controller function to update a student by ID
export const updateStudent = async (req: Request, res: Response): Promise<void> => {
    try {
        const student: IStudent | null = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!student) {
            res.status(404).json({ message: 'Student not found' });
            return;
        }

        res.status(200).json(student);
    } catch (error) {
        res.status(400).json({ message: 'Error updating student', error });
    }
};

// Controller function to delete a student by ID
export const deleteStudent = async (req: Request, res: Response): Promise<void> => {
    try {
        const student: IStudent | null = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            res.status(404).json({ message: 'Student not found' });
            return;
        }

        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting student', error });
    }
};
