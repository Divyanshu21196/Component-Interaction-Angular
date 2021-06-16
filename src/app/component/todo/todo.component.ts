import { Component, OnInit } from '@angular/core';
import {Todo} from '../../interfaces/todo';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  searchTitle:string;
  idForTodo: number;

  constructor(private toastr: ToastrService,) { }

  ngOnInit(): void {
    
    this.todos = [
      {
        'id': 1,
        'title': 'Angular List1',
        'completed': false,
      },
      {
        'id': 2,
        'title': 'Angular List2',
        'completed': false,
      },
      {
        'id': 3,
        'title': 'Angular List3',
        'completed': false,
      },
    ];
  }

 

  addList(event:any){
    this.todos.push({'id':event.id,'title':event.title,'completed':event.completed})
  }

  getStr(str){
    this.searchTitle  = str.srch;
    console.log("this",this.searchTitle);
  }
  

}
