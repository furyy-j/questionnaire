import { Component, OnInit } from '@angular/core';
import {LocalService} from "../../common/services /localService.service";
import {Question} from "../../common/models/question.interface";

@Component({
  selector: 'app-question-card',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  questions: Question[] = this.localStore.getItem('questions')

  constructor(private localStore: LocalService) { }

  ngOnInit(): void {
    this.questions.sort((a,b)=> new Date(b.creationDate)
        .getTime() - new Date(a.creationDate).getTime())
  }
  edit(id:any){
    console.log(id)
  }
  delete(i:number):void{
    this.questions.splice(i, 1);
    this.localStore.setItem('questions', this.questions);
  }
}
