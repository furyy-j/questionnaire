import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Question} from "../../common/models/question.interface";
import {Type} from "../../common/enums/types.enum";

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.scss']
})
export class CreateQuestionsComponent implements OnInit {


  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
  }

}
