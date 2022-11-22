import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Question} from "../../common/models/question.interface";
import {Type} from "../../common/enums/types.enum";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.scss']
})
export class CreateQuestionsComponent implements OnInit, OnDestroy {

  constructor(private formBuilder: FormBuilder) {

    this.sub = this.form.controls.type.valueChanges.subscribe(() => {
      !this.hasAnswers ? this.form.controls.answers.setErrors(null) : this.form.controls.answers.updateValueAndValidity();
    });
  }

  sub!: Subscription;

  questionType = Type;
  types = Object.keys(Type);

  form = this.formBuilder.group({
    title: new FormControl(null, [Validators.required]),
    type: new FormControl(null, [Validators.required]),
    answers: new FormArray([])
  })

  ngOnInit(): void {

  }
  get hasAnswers(): boolean | null{
    const value = this.form.controls.type.value;
    console.log(value !== this.questionType.Open)
    console.log(value && value !== this.questionType.Open)

    return value && value !== this.questionType.Open;
  }
  createQuestion(){}


  ngOnDestroy() {
    if(this.sub){this.sub.unsubscribe()}
  }


}
