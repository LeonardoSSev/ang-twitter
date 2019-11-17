import { Component, OnInit, Input } from '@angular/core';
import { LikeService } from 'src/app/shared/like/like.service';
import { Tweet } from './Tweet';

@Component({
  selector: 'Tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  @Input() tweet: Tweet;

  constructor(private likeService: LikeService) { }

  ngOnInit() {
  }

  likeTweet() {
    this.likeService.likeTweet(this.tweet.id).subscribe();
  }

}
