import { Component } from '@angular/core';
import { TodoItem } from './todo-item.model';
import { todoItems } from './todo-list.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'introduction to angular';
  userName = 'Türkay';
  eposta = 'turkay.urkmez@dinamikzihin.com'

  mesaj:string ='';
  isShowAllItems :boolean = true;
  constructor(){
    console.log(todoItems[0].isCompleted);
  }

  todoItems: TodoItem[]=todoItems;

  filter(){
    this.isShowAllItems = !this.isShowAllItems;
    if (this.isShowAllItems) {
       this.todoItems = todoItems; 
    }
    else{
      this.todoItems = this.todoItems.filter(x=>!x.isCompleted);
    }
   
  }
  getButtonText(){
    return this.isShowAllItems ? "Sadece yapılacakları göster" : "Tümünü göster";
  }
  addNewItem(name:string){
    let newItem = new TodoItem();
    newItem.actionName = name;
    newItem.isCompleted = false;
    this.todoItems.push(newItem);
  }
}
