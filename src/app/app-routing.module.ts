import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManagementPageComponent} from "./management-page/management-page.component";
import {CreatePageComponent} from "./create-page/create-page.component";
import {ListPageComponent} from "./list-page/list-page.component";

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/management'
  },
  {
    path: 'management', component: ManagementPageComponent
  },
  {
    path: 'create-page', component: CreatePageComponent
  },
  {
    path: 'list', component: ListPageComponent
  },
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
