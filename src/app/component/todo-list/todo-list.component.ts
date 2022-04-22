import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/model/model';
import { TodoServiceService } from 'src/app/service/todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
todos:Todo[]=[];
  constructor(private router:Router,private todoService:TodoServiceService) { }

  ngOnInit(): void {
    this.loadAllTodoList();
  }
  loadAllTodoList() {
    this.todos = this.todoService.getAllTodos();
}
}
