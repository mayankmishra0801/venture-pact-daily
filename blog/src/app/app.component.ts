import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '14';
  data = "Code step by step";
  lecture13 = "Styling";
  getValue(){
   return "Get function data"

  }
  data1 = 100;
  
  getName(name:string,secondName:string){
    alert(name);
    alert(secondName)
    
  }

  getData(val:string){


    console.warn(val)



  }
  data11 = "11 Get Input Box Value"
displayVal2: string = '';
  getValue2(val2:string){
    
console.warn(val2)
this.displayVal2 = val2
    
  



  }
count=0
  counter(type:string){
    

    type === 'add' ? this.count++:this.count--;
    


  }
  
  name = "peter"
  
  disable = false;

  show =  "true"
  color = "green"

  color1 = "xyz"

  users = ['Anil','Bhasker','Sam','Peter','Burce'];
  userDetails=[
    {name:'Anil',email:'anil@test.com',phone: '888'},
    {name: 'Bhasker', email:'bhasker@test.com',phone:'444'},
    {name:'Sam',email:'sam@test.com',phone:'333'},
    {name:'Peter',email:'peter@test.com',phone:'Peter'}
  ];

  users1 = [
    {name:'Anil',phone:'1111',socialAccounts:['facebook','insta','gmail']},
    {name:'Sam',phone:'2222',socialAccounts:['youtube','insta','linked']},
    {name:'Peter',phone:'3333',socialAccounts:['linked','insta','gmail']},
    {name:'Bruce',phone:'4444',socialAccounts:['yahoo','facebook','gmail']}

  ]
 
  color5 = "red";
  updateColor(){
    this.color5 = "blue"
    
    

  }


}
