import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineComponent } from './timeline.component';
import { TweetComponent } from './tweet/tweet.component';



@NgModule({
  declarations: [
    TimelineComponent,
    TweetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TimelineModule { }
