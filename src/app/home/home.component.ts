import { Component, OnInit  } from '@angular/core';
import { HostListener } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public keyword:string ;
  public dragging: boolean = false;
  public leftBoxWidth: string = '50%';
  public item: object = {};

  constructor() { }

  ngOnInit() {
  }

  receiveKeyword($e){
    // console.log($e);
    this.keyword = $e;
  }

  receiveItem($e){
    // console.log('received item')
    // console.log($e)
    this.item = $e;
  }

  onDragbarResize(event){
    // console.log(event)
    this.dragging = true;
  }

  onDragbarRelease(){
    // console.log('mouseup')
    this.dragging = false;
  }

  @HostListener("document:mousemove", ['$event'])
  onMousemove(event){
    if(this.dragging != true){
      return;
    }

    this.leftBoxWidth = event.clientX+"px";
  }

  @HostListener("document:mouseup", ['$event'])
  onMouseup(){
    this.dragging = false;
  }

}
