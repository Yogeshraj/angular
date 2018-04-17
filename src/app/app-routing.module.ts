import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NewAddComponent } from './new-add/new-add.component';

const routes : Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'add/:id',
    component: NewAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
