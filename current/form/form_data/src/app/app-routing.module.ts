import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { StudentDataComponent } from './student-data/student-data.component';
import { TeacherDataComponent } from './teacher-data/teacher-data.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  // {path:"student",component:StudentDataComponent},
  {path:"teacher",component:TeacherDataComponent},
  { path: '', component: ReactiveFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  // { path: '', component: TemplateDrivenFormComponent },
  { path: 'template-form', component: TemplateDrivenFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
