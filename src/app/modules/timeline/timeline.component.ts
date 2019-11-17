import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GeneralService } from 'src/app/shared/general/general-service.service';
import { Tweet } from './tweet/Tweet';
import { TweetService } from 'src/app/shared/tweet/tweet.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  tweets$: Observable<Tweet[]>;

  newTweet$: Observable<Tweet>;

  @ViewChild('newTweet', { static: false }) newTweet: ElementRef;

  constructor(private generalService: GeneralService, private tweetService: TweetService) { }

  ngOnInit() {
    const author = localStorage.getItem('username');

    this.tweets$ = this.tweetService.getTweetsFromAuthor(author);
  }

  handleNewTweet(event) {
    if (event.keyCode !== 13) {
      return;
    }

    const payload = {
      author: this.generalService.getUsername(),
      content: this.newTweet.nativeElement.value
    }

    this.tweetService.storeTweet(payload).subscribe();

    this.newTweet.nativeElement.value = '';
  }

}
