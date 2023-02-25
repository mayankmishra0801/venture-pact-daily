import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { first } from 'rxjs';
// import {first} from "./first/first.component";
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
const routes: Routes = [
 
  {
    path:'a',
    component:FirstComponent
  },
  {
    path:'b',
    component:SecondComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
