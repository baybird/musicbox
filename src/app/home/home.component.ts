import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HostListener } from '@angular/core'
import { DataService } from '../data.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {
  public keyword:string ;
  public dragging: boolean = false;
  public leftBoxWidth: string = '50%';
  public item: object = {};

  @ViewChild("musicbox") musicbox: ElementRef;

  constructor(private dataService: DataService) { }

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

  @HostListener('load', ['$event'])
  onPageLoad(event){
    console.log(event)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.leftBoxWidth = event.target.innerWidth+'px';
    console.log(this.leftBoxWidth)
  }

  @HostListener("document:mousemove", ['$event'])
  onMousemove(event){
    if(this.dragging != true){
      return;
    }

    this.leftBoxWidth = event.clientX - this.musicbox.nativeElement.offsetLeft +"px";
  }

  @HostListener("document:mouseup", ['$event'])
  onMouseup(){
    this.dragging = false;
  }

}
