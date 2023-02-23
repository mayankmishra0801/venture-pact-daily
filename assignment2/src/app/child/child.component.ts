import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})



export class ChildComponent {
  @Input() child:any = null;
  @Input() childVar:any = null;
  @Output() btnClick = new EventEmitter();
  @Output() btnClick1 = new EventEmitter();
  passBackToParent(){
    console.log('Clicked');
    // this.btnClick().emit();
    // this.btnClick1().emit({abc:123});
    this.btnClick1.emit([1,2,3,4,5]);
  }

  

}
