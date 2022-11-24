import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManagementPageComponent} from "./management-page/management-page.component";
import {CreatePageComponent} from "./create-page/create-page.component";
import {ListPageComponent} from "./list-page/list-page.component";
import {EditPageComponent} from "./edit-page/edit-page.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/management' },
  { path: 'management', component: ManagementPageComponent },
  { path: 'create-page', component: CreatePageComponent },
  { path: 'edit/:id', component: EditPageComponent },
  { path: 'list', component:  ListPageComponent},
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
