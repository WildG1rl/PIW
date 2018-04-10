import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { PostinputComponent } from './postinput/postinput.component';
import { NgComponent } from './ng/ng.component';
import {routing} from './app.routing'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    TimeLineComponent,
    PostinputComponent,
    NgComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
