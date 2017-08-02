import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public keyword: string;

  @Output() keywordEvent = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit() {
  }

  submit(){
    // console.log(this.keyword)
    this.sendKeyword();
  }

  sendKeyword(){
    this.keywordEvent.emit(this.keyword)
  }

  clearSearchBox(){
    this.keyword = null;
  }
}
