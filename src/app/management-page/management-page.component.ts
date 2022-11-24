import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-management-page',
    templateUrl: './management-page.component.html',
    styleUrls: ['./management-page.component.scss']
})
export class ManagementPageComponent {
    constructor(private title: Title) {
        title.setTitle("Management")
    }
}
