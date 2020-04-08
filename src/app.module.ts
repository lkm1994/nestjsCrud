import { ToDoModule } from './ToDo/todo.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ToDoModule,
    MongooseModule.forRoot('mongodb://localhost:27017/todo-app', { useNewUrlParser: true })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
