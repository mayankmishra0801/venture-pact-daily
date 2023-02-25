import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
    array=[];
    text1:string;
    date1:any;
    myfunctionAdd(){
      this.array.push(this.text1);
    }
}
