import {Component, Input, OnInit} from '@angular/core';
import {navbarData} from "../../enums/nav.enum";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navData = navbarData;
  constructor() {}

  ngOnInit(): void {
  }

}
