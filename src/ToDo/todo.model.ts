import { Document } from 'mongoose';

export interface ToDoModel extends Document {
     id: number;
     name: string;
     completed: boolean;
}