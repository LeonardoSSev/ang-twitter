import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tweet } from 'src/app/modules/timeline/tweet/Tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  private readonly API = 'http://localhost:8080/tweets';

  constructor(private httpClient: HttpClient) { }

  getTweetsFromAuthor(author: String) {
    return this.httpClient.get<Tweet[]>(`${this.API}?author=${author}`);
  }
}
