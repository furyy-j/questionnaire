import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LocalService} from "../../common/services /localService.service";
import {Question} from "../../common/models/question.interface";
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.scss']
})
export class ListElementsComponent implements OnInit {



  @Input() answered = false;
  @Output() update = new EventEmitter<Question>();
  @Input() set question(question: Question) {
    this._aptQuestion = { ...question, answeredDate: new Date(), answer: [...question.answer] }
  }

  _aptQuestion!: Question;

  ngOnInit(): void {
  }
  get question(): Question {
    return this._aptQuestion;
  }

  onSelectSingle(answer: { value: string }): void {
    this.question.answer[0] = answer.value;
  }
  onSelectMulti(event: MatCheckboxChange, answer: string): void {
    event.checked ? this.question.answer.push(answer) : this.question.answer.filter(a => a === answer);
  }
  isSelected(answer: string): boolean {
    return this.question.answer.includes(answer);
  }

  addAnswer(){
    this.update.emit(this.question)
  }


}
