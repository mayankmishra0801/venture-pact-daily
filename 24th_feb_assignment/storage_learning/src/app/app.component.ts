import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storage_learning';
  session:any;
 
  loadData(){
    let data:any = localStorage.getItem('session');
    // alert(data);
    this.session = JSON.parse(data);
  }


  saveData(){
     let data = {
         id:1,
         name:'Mayank'
     };

     localStorage.setItem('session',JSON.stringify(data))
  }
}
