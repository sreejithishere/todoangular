import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { TodoListModule } from './component/todo-list/todo-list.module';

const routes: Routes = [
{
  path:'',
  redirectTo:'todo-list',
  pathMatch:'full'
},
{
path:'todo-list',
loadChildren:()=>import('./component/todo-list/todo-list.module').then(mod=>mod.TodoListModule)
},
{
  path:'todo-detail',
  loadChildren:()=>import('./component/todo-detail/todo-detail.module').then(mod=>mod.TodoDetailModule)
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
