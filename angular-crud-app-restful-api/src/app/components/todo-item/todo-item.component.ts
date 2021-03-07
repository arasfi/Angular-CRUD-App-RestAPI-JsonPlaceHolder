import { Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import { Todo } from '../../models/Todo'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor( private todoService:TodoService) {
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
    this.deleteTodo.emit(todo);
  }

  onToggle(todo: Todo){
    //Toggle in the UI
    todo.completed = !todo.completed
    //Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }


}
