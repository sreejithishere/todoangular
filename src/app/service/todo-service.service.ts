import { Injectable } from '@angular/core';
import { Todo } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
public todo:Todo[]=[];
  constructor() { }
  getAllTodos(): Todo[] {

    if(localStorage.getItem('localData') !== null){ 
        this.todo = JSON.parse(localStorage.getItem('localData')|| '{}');
    } else {
        const todoArrayData = [
            {
                id: 1,
                title:'Transfer fund',
                description:'transfer fund to asthosh',
                done:false
            },
            {
                id: 2,
                title:'Buy vegetables',
                description:'buy vegetables',
                done:true
            }
        ];
        localStorage.setItem('localData', JSON.stringify(todoArrayData));
        this.todo = JSON.parse(JSON.stringify(todoArrayData));
    }       
    return this.todo;
}
getTodoById(id: number): Todo {
    var todoArray = JSON.parse(localStorage.getItem('localData')|| '{}');       
    return todoArray
      .filter((todo: { id: number; }) => todo.id === id)
      .pop();
}

updateTodoById(todo:Todo): Todo {
    if (todo.id === 0) {                    
        var todoArray = JSON.parse(localStorage.getItem('localData')|| '{}');
        var todoid = todoArray.length;
            todo.id = ++todoid;
            todoArray.push(todo);
        localStorage.setItem('localData', JSON.stringify(todoArray));
    } else {
        var todoSaveArray = JSON.parse(localStorage.getItem('localData')|| '{}');
        for (var i in todoSaveArray) {
            if (todoSaveArray[i].id === todo.id) {
                todoSaveArray[i] = todo;
                localStorage.setItem('localData', JSON.stringify(todoSaveArray));
            }
        }
    }
    return todo;
}

deleteTodoDetail(id:number) {
   var todoArray = JSON.parse(localStorage.getItem('localData')||'{}');
    for (var i in todoArray) {
        if (todoArray[i].id === id) {
            todoArray.splice(i, 1);
            localStorage.setItem('localData', JSON.stringify(todoArray));  
        }
    }    
}; 
}
