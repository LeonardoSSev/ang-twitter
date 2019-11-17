import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing'
import { LoginComponent } from './modules/authentication/login/login.component';
import { TimelineComponent } from './modules/timeline/timeline.component';
import { TweetComponent } from './modules/timeline/tweet/tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TimelineComponent,
    TweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
