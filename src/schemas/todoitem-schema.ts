import * as mongoose from 'mongoose';

export const ToDoItemSchema = new mongoose.Schema({
    name: {type: String, required:true},
    completed: {type: Boolean, required: true}
})