import { Injectable, EventEmitter } from '@angular/core';
import { sprintf } from 'sprintf-js'
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject'


@Injectable()
export class DataService {
  private search_url: string = "https://itunes.apple.com/search?term=%s";
  public music = new Subject();
  public autoplay = new Subject<boolean>();

  // public item: EventEmitter<any> = new EventEmitter();
  constructor(private http: Http) {

  }

  search(keyword:string){
    // handle localstorage
    // 1) store last keyword to localstorage
    // 2) if keyword and localstorage are both empty searching "Bob Dylan"
    var localStr = localStorage.getItem('keyword')

    if(keyword == undefined && localStr !=""){
      keyword = localStr;
    }

    if(keyword == undefined && localStr == ""){
      keyword = "Bob Dylan"
    }

    localStorage.setItem('keyword', keyword)

    var url = sprintf(this.search_url, keyword);
    var obj = this.http.get(url).map(res =>
      res.json()
    )

    return obj;
  }// end func

  selectedMusic(music: object){
    this.music.next(music);
  }

  setAutoplay(val:boolean){
    this.autoplay.next(val)
  }

}
