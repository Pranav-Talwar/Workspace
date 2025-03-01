import mongoose, { Schema, Document } from 'mongoose';

// Define an interface for the student document
export interface IStudent extends Document {
    name: string;
    age: number;
    class: string;
    section: string;
}

// Define the schema
const studentSchema: Schema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    class: { type: String, required: true },
    section: { type: String, required: true }
});

// Export the model
export const Student = mongoose.model<IStudent>('Student', studentSchema);
