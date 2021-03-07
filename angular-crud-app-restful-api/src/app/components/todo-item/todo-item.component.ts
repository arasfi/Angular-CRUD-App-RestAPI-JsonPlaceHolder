import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor() {
    this.todo = {
      id: 1,
      title: 'Todo One',
      completed: false
    };
   }

  ngOnInit(): void {
  }

  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  onDelete(todo: Todo)
  {
    console.log("delete")
  }

  onToggle(todo: Todo){
    todo.completed = !todo.completed
  }

}
