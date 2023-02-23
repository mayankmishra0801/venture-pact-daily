import { Component } from '@angular/core';

import { UserdataService } from '../services/userdata.service';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  constructor(public services:UserdataService){}


 addnumber(){
  this.services.addnumber()
 }
}
