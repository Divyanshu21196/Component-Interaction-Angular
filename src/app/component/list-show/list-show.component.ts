import { Component, OnInit,Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {SharedService} from '../shared/shared.service';

@Component({
  selector: 'app-list-show',
  templateUrl: './list-show.component.html',
  styleUrls: ['./list-show.component.css']
})
export class ListShowComponent implements OnInit {
  @Input() todo:any;
  @Input() srchT:string;
  todos=[];
  private modalRef;
  searchTitle:string;
  editTitle:string;
  editTitleId:number;
  text:string;
  constructor(private toastr: ToastrService,private modalService: NgbModal,private shared:SharedService) { }

  ngOnChanges(changes) {
    if(changes.srchT.currentValue != changes.srchT.previousValue){
      this.searchTitle = changes.srchT.currentValue;
    }
  }

  ngOnInit(): void {
    this.todos  = this.todo;
    // this.searchTitle = this.shared.getMessage();
    // console.log("========tofo",this.searchTitle);
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.toastr.success('Todo deleted successfully');
  }

  complete(id: number): void {
    let index = this.todos.findIndex(e=>e.id === id)
    if(index != -1){
      this.todos[index].completed = true;
      this.toastr.success('Todo completed successfully');
    }else{
      this.toastr.success('Todo not in list');
    }
  }




  edit(id,modal){
    this.modalRef = this.modalService.open(modal, { size: 'sm', ariaLabelledBy: 'modal-basic-title',backdrop:'static'});
    let index = this.todos.findIndex(e=>e.id === id)
    if(index != -1){
     this.editTitle = this.todos[index].title;
     this.editTitleId = id;
    }
  }

  doneEdit() {
    let index = this.todos.findIndex(e=>e.id === this.editTitleId)
    if(index != -1){
     this.todos[index].title =  this.editTitle ;
     this.modalService.dismissAll();
    }
    this.toastr.info('Edited Successfully')
  }

  cancelEdit(){
    this.editTitle="";
    this.modalService.dismissAll();
  }


}
