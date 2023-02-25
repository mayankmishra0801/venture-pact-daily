import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NextDayComponent } from './next-day/next-day.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { ChangepComponent } from './changep/changep.component';
import { ChangecComponent } from './changec/changec.component';
import { TodolistComponent } from './todolist/todolist.component';
import { DetailTodoComponent } from './detail-todo/detail-todo.component';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FilterPipe,
    NextDayComponent,
    Assignment4Component,
    ChangepComponent,
    ChangecComponent,
    TodolistComponent,
    DetailTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
