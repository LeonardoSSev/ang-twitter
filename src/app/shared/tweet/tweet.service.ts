import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tweet } from 'src/app/modules/timeline/tweet/Tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  private readonly API = 'http://localhost:8080/tweets';

  constructor(private httpClient: HttpClient) { }

  getTweets() {
    return this.httpClient.get<Tweet[]>(this.API);
  }

  storeTweet(payload: any) {
    return this.httpClient.post<Tweet>(this.API, payload);
  }
}
