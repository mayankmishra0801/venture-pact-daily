import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
// import { AppComponent } from './app.component';
import { ParentComponent} from './parent/parent.component';
import { ChildComponent } from './child/child.component';
const routes: Routes = [

  {
    path:'first',
    component:FirstComponent
  },
  {
    path:'second',
    component:SecondComponent
  },
  { 
    path:'parentroute',
    component:ParentComponent

  },
  {
    path:'childroute',
    component:ChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
