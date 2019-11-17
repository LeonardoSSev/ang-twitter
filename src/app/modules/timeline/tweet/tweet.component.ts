import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  @Input() tweet;

  constructor() { }

  ngOnInit() {
  }

  performLike() {
    this.tweet.likes++;
  }

}
