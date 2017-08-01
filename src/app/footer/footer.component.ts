import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  autoplay: boolean;
  localautoplay: string;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    // this.localautoplay = localStorage.getItem('autoplay');
    //
    // if(this.localautoplay != undefined){
    //   if(this.localautoplay == '1' ){
    //     this.autoplay = true;
    //   }else{
    //     this.autoplay = false;
    //   }
    // }
    //
    // console.log("save:"+this.autoplay)

  }

  onchange(){
    // if(this.autoplay == true){
    //   localStorage.setItem('autoplay', '1')
    // }else{
    //   localStorage.setItem('autoplay', '0')
    // }
    // console.log("save:"+this.autoplay)

    this.dataService.setAutoplay(this.autoplay)
  }
}
