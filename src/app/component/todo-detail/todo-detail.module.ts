import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoDetailRoutingModule } from './todo-detail-routing.module';
import { TodoDetailComponent } from './todo-detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodoDetailComponent
  ],
  imports: [
    CommonModule,
    TodoDetailRoutingModule,
    FormsModule
  ]
})
export class TodoDetailModule { }
