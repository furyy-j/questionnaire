import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LocalService} from "../../common/services /localService.service";
import {Question} from "../../common/models/question.interface";

@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.scss']
})
export class ListElementsComponent implements OnInit {


  @Input() question;
  @Input() answered = false;
  @Output() update = new EventEmitter<Question>();

  // answeredQuestions: Question = this.questions

  ngOnInit(): void {
  }


}
