import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Type} from "../../common/enums/types.enum";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {LocalService} from "../../common/services /localService.service";
import {Question} from "../../common/models/question.interface";
import {GenerateIDService} from "../../common/services /generate-id.service";


@Component({
    selector: 'app-create-questions',
    templateUrl: './create-questions.component.html',
    styleUrls: ['./create-questions.component.scss']
})
export class CreateQuestionsComponent implements OnInit, OnDestroy {

    @Input() editing = false;
    @Input() question;

    constructor(private formBuilder: FormBuilder,
                private localStore: LocalService,
                private randID: GenerateIDService,
                private router: Router) {
        this.sub = this.form.controls.type.valueChanges.subscribe(() => {
            !this.hasAnswers ? this.answers.setErrors(null) : this.answers.updateValueAndValidity();
        });
    }

    sub!: Subscription;

    questionType = Type;
    types = Object.keys(Type);
    questions: Question[] = this.localStore.getItem("questions") || [];

    form = this.formBuilder.group({
        title: new FormControl(null, [Validators.required]),
        type: new FormControl(null, [Validators.required]),
        answers: new FormArray([],
            (amount) => {
                return amount.value.length > 1 ? null : {error: true};
            })
    })

    // get answers() {
    //     return this.form.controls.answers as FormArray ;
    // }

    answers: any | FormArray = this.form.controls.answers;

    ngOnInit(): void {
        if (this.editing) {
            this.form.patchValue(this.question);
            this.question.answers?.forEach(answer => this.addAnswer(answer))
        }
    }

    get hasAnswers(): boolean {
        const value = this.form.controls.type.value;
        if (!value) {
            return null
        }
        return value !== this.questionType.Open;
    }

    createQuestion() {
        this.localStore.setItem('questions', [...this.questions,
            {
                ...this.form.value,
                id: this.randID.generateID(),
                creationDate: new Date(),
                answer: []
            }
        ])
        this.router.navigate(['/management']);
    }

    updateQuestion() {
        const index = this.questions.findIndex(question => question.id === this.question.id);
        this.questions[index] = {...this.question, ...this.form.getRawValue()}
        this.localStore.setItem('questions', this.questions);
        this.router.navigate(['/management']);
    }

    addAnswer(answer?: string): void {
        this.answers.push(new FormControl(answer || '', Validators.required));
    }

    removeAnswer(i:number){
        const answers = this.form.get('answers') as FormArray;
        answers.removeAt(i)
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe()
        }
    }
}
