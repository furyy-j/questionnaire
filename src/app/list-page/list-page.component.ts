import {Component} from '@angular/core';
import {Question} from "../common/models/question.interface";
import {LocalService} from "../common/services /localService.service";

@Component({
    selector: 'app-list-page',
    templateUrl: './list-page.component.html',
    styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent {

    questions: Question[] = this.localState.getItem('questions')

    constructor(private localState: LocalService) {
    }

    update(question1: Question): void {
        const index = this.questions.findIndex(question => question.id === question1.id);
        this.questions[index] = question1;
        this.questions = this.questions
            .sort((a, b) => new Date(b.answeredDate).getTime() - new Date(a.answeredDate).getTime());
        this.localState.setItem('questions', this.questions);
    }

}
