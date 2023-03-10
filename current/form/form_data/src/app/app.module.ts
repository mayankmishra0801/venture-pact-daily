import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms'
// import { TemplateDrivenFormComponent } from './teacher-data/teacher-data.component';
import { TeacherDataComponent } from './teacher-data/teacher-data.component';
// import { StudentDataComponent } from './student-data/student-data.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ValidateUserNameDirective } from './directives/validate-user-name.directive';
import { MatchPasswordDirective } from './directives/match-password.directive';
@NgModule({
  declarations: [
    AppComponent,

    TeacherDataComponent,
    // StudentDataComponent,
    ReactiveFormComponent,
    NavBarComponent,
    TemplateDrivenFormComponent,
    ValidateUserNameDirective,
    MatchPasswordDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
