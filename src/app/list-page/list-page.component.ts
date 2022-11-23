import { Component, OnInit } from '@angular/core';
import {Question} from "../common/models/question.interface";
import {LocalService} from "../common/services /localService.service";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  questions: Question[] = this.localState.getItem('questions')
  constructor(private localState: LocalService) { }

  ngOnInit(): void {
  }

  update(e:any){
    console.log()
  }

}
