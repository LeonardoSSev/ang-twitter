import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GeneralService } from 'src/app/shared/general/general-service.service';

import { Tweet } from './tweet/Tweet';
import { TweetService } from 'src/app/shared/tweet/tweet.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  tweets: Tweet[];

  @ViewChild('newTweet', { static: false }) newTweet: ElementRef;

  constructor(private generalService: GeneralService, private tweetService: TweetService) { }

  ngOnInit() {
    const author = localStorage.getItem('username');

    this.tweetService.getTweetsFromAuthor(author)
    .subscribe(tweets => this.tweets = tweets);
  }

  handleNewTweet(event) {
    if (event.keyCode !== 13) {
      return;
    }

    const author = this.generalService.getUsername();
    const content = this.newTweet.nativeElement.value;

    const tweet = {
      author,
      content,
      likes: 0
    }

    this.tweets.unshift(tweet);

    this.newTweet.nativeElement.value = '';
  }

}
