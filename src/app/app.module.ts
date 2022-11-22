import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManagementPageComponent } from './management-page/management-page.component';
import { QuestionComponent } from './management-page/question-card/question.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { CreatePageComponent } from './create-page/create-page.component';
import { HeaderComponent } from './common/components/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { ListPageComponent } from './list-page/list-page.component';
import { CreateQuestionsComponent } from './create-page/create-questions/create-questions.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatStepperModule} from "@angular/material/stepper";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ManagementPageComponent,
    QuestionComponent,
    CreatePageComponent,
    HeaderComponent,
    ListPageComponent,
    CreateQuestionsComponent
  ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatStepperModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
