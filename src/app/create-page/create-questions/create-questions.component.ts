import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Type} from "../../common/enums/types.enum";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.scss']
})
export class CreateQuestionsComponent implements OnInit, OnDestroy {

  constructor(private formBuilder: FormBuilder,
              private router: Router) {

    this.sub = this.form.controls.type.valueChanges.subscribe(() => {
      !this.hasAnswers ? this.answers.setErrors(null) : this.answers.updateValueAndValidity();
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

  answers: FormArray | any = this.form.controls.answers;

  ngOnInit(): void {
    console.log(this.answers)
  }

  get hasAnswers(): boolean | null{
    const value = this.form.controls.type.value;
    if(!value){return null}
    return value !== this.questionType.Open;
  }
  createQuestion(){
    console.log(this.form.value)
    this.router.navigate(['/management']);
  }

  addAnswer(answer?: string):void{
     this.answers.push(new FormControl(answer || '', Validators.required))
  }
  ngOnDestroy() {
    if(this.sub){this.sub.unsubscribe()}
  }


}
