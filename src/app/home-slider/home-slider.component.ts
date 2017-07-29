import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { DataService } from '../data.service'

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css'],
  providers: [DataService]
})
export class HomeSliderComponent implements OnInit {
  @Input() keyword: string;
  @Output() clickItemEvent = new EventEmitter<any>();

  public result = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

  ngOnChanges(changes: any ){
    // console.log(changes.keyword.currentValue);
    this.dataService.search(changes.keyword.currentValue).subscribe((data) => {
      this.result = data;
      // console.log(data.results[0])
      if(data.hasOwnProperty('results')){
        this.onClick(data.results[0])
      }
    });
  }

  onClick(item): void {
    this.clickItemEvent.emit(item)
  }
}
