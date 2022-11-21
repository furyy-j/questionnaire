import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.scss']
})
export class CreateQuestionsComponent implements OnInit {

  constructor() { }

  form = this.fb.group({})
  ngOnInit(): void {
  }

}
