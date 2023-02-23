import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NextDayComponent } from './next-day/next-day.component';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FilterPipe,
    NextDayComponent
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
