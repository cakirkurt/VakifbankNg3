import { Component } from '@angular/core';
import { TodoItem } from './todo-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'introduction to angular';
  userName = 'Türkay';
  eposta = 'turkay.urkmez@dinamikzihin.com'

  todoItems: TodoItem[]=[
    new TodoItem('Yeni bir mouse al',true),
    new TodoItem('.NET Core ile Web API geliştir',true),
    new TodoItem('Angular öğren',false),
  ]
}
