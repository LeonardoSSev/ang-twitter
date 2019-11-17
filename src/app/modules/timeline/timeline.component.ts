import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GeneralService } from 'src/app/shared/general/general-service.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  tweets = [];

  @ViewChild('newTweet', { static: false }) newTweet: ElementRef;

  constructor(private generalService: GeneralService) { }

  ngOnInit() {
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
