import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { MentorsComponent } from './mentors/mentors.component';
import { AppRoutingModule }     from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    MentorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
