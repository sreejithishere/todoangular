import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoDetailRoutingModule } from './todo-detail-routing.module';
import { TodoDetailComponent } from './todo-detail.component';


@NgModule({
  declarations: [
    TodoDetailComponent
  ],
  imports: [
    CommonModule,
    TodoDetailRoutingModule
  ]
})
export class TodoDetailModule { }
