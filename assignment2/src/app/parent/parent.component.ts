import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
   parentData = 'Help';

   funParent(){
    console.log('hellloooo');

   }
   funParent1(ev:any){
    console.log('p111111');
    console.log(ev);
   }
    
}
