import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-todo',
  templateUrl: './detail-todo.component.html',
  styleUrls: ['./detail-todo.component.css']
})
export class DetailTodoComponent {

   array=[];
    text1:string;
    date1: any;
    myfunctionAdd(){
       this.array.push(this.text1);
       this.array.push(this.date1);
    }
    myfunctionEdit(){
            
    }


}
