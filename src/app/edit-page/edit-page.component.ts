import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {Title} from "@angular/platform-browser";

import {Question} from "../common/models/question.interface";
import {LocalService} from "../common/services /localService.service";


@Component({
    selector: 'app-edit-page',
    templateUrl: './edit-page.component.html',
    styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

    constructor(private route: ActivatedRoute,
                private localStore: LocalService,
                private title: Title) {
        title.setTitle("Edit");
    }

    routeSubscription!: Subscription;
    id!: string;
    question!: Question;


    ngOnInit(): void {
        this.routeSubscription = this.route.params.subscribe(params => this.id = params['id']);
        this.question = this.localStore.getItem('questions').find((q: Question) => q.id == this.id);
    }

    ngOnDestroy(): void {
        if (this.routeSubscription) this.routeSubscription.unsubscribe();
    }
}
