import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDTO } from './dtos';

@Injectable()
export class NoteService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

  async addTodo(createTodoDTO: CreateTodoDTO): Promise<Todo> {
    const newTodo = await new this.todoModel(createTodoDTO);
    return newTodo.save();
  }

  async getTodo(todoID: number): Promise<Todo> {
    const todo = await this.todoModel.findById(todoID).exec();
    return todo;
  }

  async getAllTodos(): Promise<Todo[]> {
    const todos = await this.todoModel.find().exec();
    return todos;
  }

  async editTodo(todoID: number, createTodoDTO: CreateTodoDTO): Promise<Todo> {
    const editedTodo = await this.todoModel.findByIdAndUpdate(
      todoID,
      createTodoDTO,
      { new: true },
    );
    return editedTodo;
  }

  async deleteTodo(todoID: number): Promise<any> {
    const deletedTodo = await this.todoModel.findByIdAndRemove(todoID, err => {
      err ? console.log(err) : console.log('Delete Success');
    });
    return deletedTodo;
  }
}