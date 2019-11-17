import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  private readonly API = 'http://localhost:8080/tweets/{id}/like';

  constructor(private httpClient: HttpClient) { }

  likeTweet(tweetId: string) {
    const url = this.API.replace('{id}', tweetId);

    return this.httpClient.post(url, {});
  }
}
