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

  search(keyword:string = "Bob Dylan"){
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
