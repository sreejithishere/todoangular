import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Todo } from 'src/app/model/model';
import { TodoServiceService } from 'src/app/service/todo-service.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  public todoId: string='';
  public todoDetail = <Todo>{};
  public mode: string ='';    
  constructor( private activatedRoute: ActivatedRoute, private router: Router, private todoService: TodoServiceService ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
          this.todoId = params['id'];
          if (this.todoId !== undefined) {
                this.getTodoDetailById(this.todoId);
                this.mode = 'Edit';    
          } else {
                // this.todoId = null;
                console.log(this.todoId);
                this.todoDetail['id'] = 0;
                this.mode = 'Add';   
          }
        }); 
  }
  
  getTodoDetailById(id:any) {
    this.todoDetail = this.todoService.getTodoById(parseInt(id));
  }
  
  onTodoSubmitForm(form) {
    if(form.valid) {
        this.todoService.updateTodoById(this.todoDetail);
        this.router.navigate(['/todo-list']);
    } else {
    
    }
  }
  onClickCancel() {
    this.router.navigate(['/todo-list']);
  }

}
