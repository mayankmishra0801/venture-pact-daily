import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
   current="" 
   parent = "pact"
   funparent(){

   }
   funparent1(event:any){
    console.log("abc")
    console.log(event)
   }
   onUpdatedCounter(event:any){
    this.onUpdatedCounter
    console.log(event)
   }

  
}
