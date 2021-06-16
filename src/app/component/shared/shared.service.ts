import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  searchString:string;

  setmessage(event){
    this.searchString = event;
    console.log(event);
  }

  getMessage(){
   return this.searchString;
  }

}
