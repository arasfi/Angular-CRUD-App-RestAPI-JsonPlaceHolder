import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { Todo } from '../models/Todo'
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl:string;

  constructor(private http:HttpClient) {
    this.todosUrl = '';
  }
  
  getTodos():Observable<Todo[]>
  {
    this.todosUrl = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Todo[]>(this.todosUrl);
  }
}
