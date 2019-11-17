import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing'
import { LoginComponent } from './modules/authentication/login/login.component';
import { TimelineComponent } from './modules/timeline/timeline.component';
import { TweetComponent } from './modules/timeline/tweet/tweet.component';
import { GeneralService } from './shared/general/general-service.service';
import { FormsModule } from '@angular/forms';

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
    routing,
    FormsModule
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
