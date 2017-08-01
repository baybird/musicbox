import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  autoplay: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onchange(){
    this.dataService.setAutoplay(this.autoplay)
    console.log(this.autoplay)
  }
}
