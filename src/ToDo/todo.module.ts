import { ToDoItemSchema } from './../schemas/todoitem-schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDoController } from './todo.controller';

import { Module } from '@nestjs/common';
import { ToDoService } from './todo.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'ToDoModel', schema: ToDoItemSchema }]),],
  controllers: [ToDoController],
  providers: [ToDoService],
})
export class ToDoModule {}