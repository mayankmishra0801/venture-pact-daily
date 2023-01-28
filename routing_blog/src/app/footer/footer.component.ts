import { Component } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {

  // memberData = [
  //   {name:'Anil',email:'anil@test.com'},
  //   {name:'Sam',email:'sam@test.com'},
  //   {name:'Bhasker',email:'bhasker@test.com'},
  //   {name:'Peter',email:'peter@test.com'}

  // ]

  users:any;
  constructor(private userdata: UserdataService){
   console.warn("userdata",userdata.users())
   this.users = userdata.users();
  }


}
