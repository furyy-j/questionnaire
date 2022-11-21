import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManagementPageComponent} from "./management-page/management-page.component";

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/management'
  },
  {
    path: 'management', component: ManagementPageComponent
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
