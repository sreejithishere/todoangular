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
        this.todo = JSON.parse(localStorage.getItem('localdata')|| '{}');
    } else {
        const todoArrayData = [
            {
                id: 1,
                title: 'Prof.',
                salution: 'Mr.',
                firstName: 'Sree',
                middleName: 'Jith',
                lastName: 'R',
                phone: '1234567890',
                email: 'sree@gmail.com'
            },
            {
                id: 2,
                title: 'Dr.',
                salution: 'Mr.',
                firstName: 'Vishnu',
                middleName: 'S',
                lastName: 'R',
                phone: '0987654321',
                email: 'Vishnu@gmail.com'
            }
        ];
        localStorage.setItem('localData', JSON.stringify(todoArrayData));
        this.todo = JSON.parse(JSON.stringify(todoArrayData));
    }       
    return this.todo;
}
}
