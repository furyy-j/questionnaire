import {Component} from '@angular/core';
import {navbarData} from "../../enums/nav.enum";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    navData = navbarData;
}
