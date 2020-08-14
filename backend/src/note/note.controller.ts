/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { CreateTodoDTO } from './dtos';
import { NoteService } from './note.service';
import {
  Controller,
  Post,
  Res,
  Body,
  HttpStatus,
  Get,
  Param,
  NotFoundException,
  Delete,
  Put,
} from '@nestjs/common';
import { ValidateObjectId } from './utils/pipes/validate-object-id.pipes';

@Controller('notes')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  // Submit a todo
  @Post()
  async addTodo(@Res() res, @Body() createTodoDTO: CreateTodoDTO) {
    const newTodo = await this.noteService.addTodo(createTodoDTO);
    return res.status(HttpStatus.OK).json({
      message: 'New TODO created !!',
      todo: newTodo,
    });
  }

  // Fetch all todos
  @Get()
  async getAllTodos(@Res() res) {
    const todos = await this.noteService.getAllTodos();
    return res.status(HttpStatus.OK).json(todos);
  }

  // Fetch a particular todo using ID
  @Get(':id')
  async getTodo(@Res() res, @Param('id', new ValidateObjectId()) todoID) {
    const todo = await this.noteService.getTodo(todoID);
    if (!todo) throw new NotFoundException('Khong co todo nay');
    return res.status(HttpStatus.OK).json(todo);
  }

  // Edit a particular post using ID
  @Put(':id')
  async editPost(
    @Res() res,
    @Param('id', new ValidateObjectId()) todoID,
    @Body() createTodoDTO: CreateTodoDTO,
  ) {
    const editedTodo = await this.noteService.editTodo(todoID, createTodoDTO);
    if (!editedTodo) throw new NotFoundException('Todo nay khong ton tai');
    return res.status(HttpStatus.OK).json({
      message: 'Todo has been successfully updated',
      todo: editedTodo,
    });
  }
  // Delete a post using ID
  @Delete(':id')
  async deleteTodo(@Res() res, @Param('id', new ValidateObjectId()) todoID) {
    const deletedTodo = await this.noteService.deleteTodo(todoID);
    if (!deletedTodo) throw new NotFoundException('Post does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Todo has been deleted!',
      post: deletedTodo,
    });
  }
}
