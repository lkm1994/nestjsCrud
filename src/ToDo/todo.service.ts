import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ToDoModel } from './todo.model';
import { AddToDoItemDTO } from '../dto/add-todo-item-dto';

@Injectable()
export class ToDoService {

    constructor(@InjectModel('ToDoModel') private readonly toDoModel: Model<ToDoModel>) { }
    
    async addItem(additemDTO: AddToDoItemDTO) {
        let name =  additemDTO.name;
        let completed = additemDTO.completed;
        const newItem = new this.toDoModel({
            name,
            completed
        });
        const result = await newItem.save();
        return ''
    }

    async getItem(id: string) {
        const item = await this.toDoModel.findById(id);
        if(!item){
            throw new NotFoundException('Could not find Item');
        }
        return item
    }

    async getAllItem() {
        const items = await this.toDoModel.find().exec();
        return items;
    }

    async updateItem(id: string, updateData: AddToDoItemDTO) {
        const getItem = await this.toDoModel.findById(id).exec();
        if(!getItem) {
            throw new NotFoundException('Item not found'); 
        }
        if(updateData.name){
            getItem.name = updateData.name
            getItem.completed = updateData.completed
        } else {
            throw new NotFoundException('Cannot update the item as Item Title or status cannot be empty'); 
        }
        getItem.save();
    }
    async deleteItem(id: string) {
        const deleteitem = await this.toDoModel.deleteOne({_id: id}).exec();
        return deleteitem;
    }
}