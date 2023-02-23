import { Component } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
   number=1
   constructor(public services:UserdataService){

   }

   addnumber(){
    this.services.addnumber()
   }
}
