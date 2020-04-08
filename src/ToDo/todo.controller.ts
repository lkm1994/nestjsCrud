import { ToDoModel } from './todo.model';
import { Controller, Post, Body, Res, HttpStatus, Get, Param, Put, Delete } from "@nestjs/common";
import { ToDoService } from "./todo.service";
import { AddToDoItemDTO } from '../dto/add-todo-item-dto';

@Controller('todo')
export class ToDoController {
    constructor(private readonly todoservice: ToDoService){}
    
    @Post('add')
    async addTodoItem(@Res() res,@Body() addToDoItemDTO: AddToDoItemDTO) {
        console.log(addToDoItemDTO)
        const addItem = await this.todoservice.addItem(addToDoItemDTO);
        return res.status(HttpStatus.OK).json({
            message: "Customer has been created successfully",
            addItem
        })
    }

    @Get('fetch')
    async getTodoItem(@Res() res, @Param(':id') id: string) {
        const findItem = await this.todoservice.getItem(id);
        return res.status(HttpStatus.OK).json({
            findItem
        })
    }

    @Get('fetchtodoItems')
    async getAllToDoItems(@Res() res) {
        const fetchItems = await this.todoservice.getAllItem();
        return res.status(HttpStatus.OK).json({
            fetchItems
        })
    }
    @Put('updateitem/:id')
    async updateToDoItem(@Res() resizeBy, @Param('id') id: string, @Body() updatedData: AddToDoItemDTO) {
        const updateItem = await this.todoservice.updateItem(id, updatedData);
        return resizeBy.status(HttpStatus.OK).json({
            updateItem
        })
    }
    @Delete('deleteitem/:id')
    async deleteTodoItem(@Res() res, @Param('id') id: string) {
        const deleteItem = await this.todoservice.deleteItem(id);
        return res.status(HttpStatus.OK).json({
            message: 'Item deleted Successfully'
        })
    }
}