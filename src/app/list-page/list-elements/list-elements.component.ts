import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from "../../common/models/question.interface";
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
    selector: 'app-list-elements',
    templateUrl: './list-elements.component.html',
    styleUrls: ['./list-elements.component.scss']
})
export class ListElementsComponent {

    @Output() update = new EventEmitter<Question>();
    @Input() answered = false;

    @Input() set question(question: Question) {
        this._changes = {...question, answeredDate: new Date(), answer: [...question.answer]}
    }

    private _changes!: Question;

    get question(): Question {
        return this._changes;
    }

    onSelectSingle(answer: { value: string }): void {
        this.question.answer[0] = answer.value;
    }

    onSelectMulti(event: MatCheckboxChange, answer: string): void {
        event.checked ? this.question.answer.push(answer)
            : this.question.answer.filter(a => a === answer);
    }

    isSelected(answer: string): boolean {
        return this.question.answer.includes(answer);
    }

    removeAnswer(): void {
        this.question.answer = [];
        this.question.answeredDate = null;
        this.update.emit(this.question);
    }

    addAnswer(): void {
        this.update.emit(this.question)
    }
}
