import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import {SharedService} from '../shared/shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTitle:string;

  @Output() searchStr = new EventEmitter<{}>()

  constructor(private shared:SharedService) { }

  ngOnInit(): void {
  }

  onKey(){
    this.searchStr.emit({'srch':this.searchTitle});
    // this.shared.setmessage(this.searchTitle);
  }

}
