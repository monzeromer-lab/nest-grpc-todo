import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Todo } from './todo.class';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';

interface TodoInput {
  todo: string
}
@Controller()
export class TodoController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod("TodoController", "getTodo")
  getTodo(): TodoInput {
    console.log(Todo.getMyTodo());
    
    return {todo: Todo.getMyTodo()};
  }

  @GrpcMethod("TodoController", "setTodo")
  setTodo(data: TodoInput, metadata: Metadata, call: ServerUnaryCall<any, any>){
    Todo.setMyTodo(data.todo);
    return {todo: Todo.getMyTodo()};
  }
}
