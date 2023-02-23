import { Component } from '@angular/core';

@Component({
  selector: 'app-next-day',
  templateUrl: './next-day.component.html',
  styleUrls: ['./next-day.component.css']
})
export class NextDayComponent {

  text:string;
 filterstring:any;
  array=[];
 myfunction(){
   this.array.push(this.text);
   console.log(this.array);
   }
   constructor(){
    
   }

}
