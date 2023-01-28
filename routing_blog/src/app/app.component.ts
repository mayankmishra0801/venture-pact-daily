import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing_blog';
   users:any;
 constructor(private userdata: UserdataService){
  console.warn("userdata",userdata.users())
  this.users = userdata.users();
 }


  // memberData = [
  //   {name:'Anil',email:'anil@test.com'},
  //   {name:'Sam',email:'sam@test.com'},
  //   {name:'Bhasker',email:'bhasker@test.com'},
  //   {name:'Peter',email:'peter@test.com'}

  // ]
}
