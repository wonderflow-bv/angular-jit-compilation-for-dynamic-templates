import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ADD_TODO } from '../../reducers/todos';
import { Todo } from '../../models/todo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-simple-component',
  templateUrl: './simple-component.component.html',
  styleUrls: ['./simple-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleComponentComponent implements OnInit {
  public todos: Observable<any>;

  constructor(private store: Store<any>) {
    this.todos = store.select('todos');
    debugger
  }

  ngOnInit() {

  }

  pushButton() {
    alert('Button pushed!');
    this.store.dispatch({
      type: ADD_TODO,
      payload: new Todo('new todo ' + Math.random()),
    });
  }

}
