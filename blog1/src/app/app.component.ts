import { Component } from '@angular/core';
import {NgForm,FormGroup,FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome';
  userData:any={};
 
  getData(data:NgForm){
    console.warn(data)
    this.userData = data    
  }
  display = true
  toggle(){

    this.display = !this.display;
  }
  list:any[] = [];
  addTask(item:string){
     
     this.list.push({id:this.list.length,name:item});
     console.warn(this.list)
  }
removeTask(id:number){
  console.warn(id)
  this.list = this.list.filter(item=>item.id!==id)
}


data4 = 14
updateData(){
  this.data4 =Math.floor( Math.random()*10);
}

userDetails2=[
  {name:'Anil',email:'mayank0801mishra@gmail.com'},
  {name:'sam',email:'peter@test,com'}
]
data5 = "x";

updateData3(item3:string){
   console.warn(item3)
   this.data5 = item3;
}

data8: any;
getVal2(item:any){
  console.warn(item)
}

title5 = 'Angular Basic Pipes';
 today = Date();
  
 capString(item:string){
  return item.toUpperCase();
 }

user10 = {
  name:'Anil',
  age :28
}
userLogin(item:any){
  console.warn(item);
}

loginUser(item:any){
  console.warn(item);
}

loginForm1 = new FormGroup({
  user:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
  password: new FormControl('',[Validators.required,Validators.minLength(5)]),
 // email :new FormControl('',[Validators.required, Validators.email])
})

loginUser1(){
  console.warn(this.loginForm1.value);
}

get user(){
  return this.loginForm1.get('user')
  
}
get password(){
  return this.loginForm1.get('password')
}

}


