import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { DataService } from '../data.service'

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit {
  @Input() keyword: string;
  @Output() clickItemEvent = new EventEmitter<any>();

  public result = [];
  public selectedRow = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

  ngOnChanges(changes: any ){
    // console.log(changes.keyword.currentValue);
    this.dataService.search(changes.keyword.currentValue).subscribe((data) => {
      this.result = data;
      // console.log(data.results)
      if(data.hasOwnProperty('results')){
        this.onClick(data.results[0], 0)
      }
    });
  }

  onClick(item, rowNum): void {
    this.selectedRow = rowNum
    this.dataService.selectedMusic(item);
    // this.clickItemEvent.emit(item)
  }
}
