import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css'],
})
export class HomeContentComponent implements OnInit {
  @Input() keyword: string;
  @Input() item: object;

  constructor() {
  }

  ngOnInit() {
  }

}
