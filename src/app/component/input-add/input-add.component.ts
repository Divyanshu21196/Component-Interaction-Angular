import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({ 
  selector: 'app-input-add',
  templateUrl: './input-add.component.html',
  styleUrls: ['./input-add.component.css']
})
export class InputAddComponent implements OnInit {

  todos=[];
  todoTitle: string;
  idForTodo:any;
  @Input('tod') todo:[];

  @Output() onAdded = new EventEmitter<{}>();


  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.todoTitle = '';
    this.todos = this.todo;
    // console.log("==========",this.todos);
    this.idForTodo  = this.todos.length +1;
  }

  addTodo(): void {
    if (this.todoTitle.trim().length === 0) {
      return;
    }

    let data = this.todos.find(e=>e.title == this.todoTitle);
    if(data){
      this.toastr.error('Already Present');
    }else{

      this.onAdded.emit({
        id: this.idForTodo,
        title: this.todoTitle,
        completed: false,
      })
      this.toastr.success('Added successfully')
      this.todoTitle = '';
      this.idForTodo++;
    }
  }

}
