import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManagementPageComponent } from './management-page/management-page.component';
import { QuestionComponent } from './management-page/question-card/question.component';
import { CreateCardComponent } from './management-page/create-card/create-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagementPageComponent,
    QuestionComponent,
    CreateCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
