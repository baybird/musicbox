import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service'


@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css'],
})
export class HomeContentComponent implements OnInit {
  @Input() keyword: string;
  // @Input() item: object;
  private music: object = {};

  constructor(private dataService: DataService) {
    this.dataService.music.subscribe((data)=>{
      // console.log(data)
      this.music = data;
    })
  }

  ngOnInit() {
  }

}
