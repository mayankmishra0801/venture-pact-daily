import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  users:any;
  constructor(private userData:UsersDataService){
     userData.users().subscribe((data)=>{
      console.warn("data",data);
       this.users = data});
    
  }

  ngOnInit() : void{
    
  }
}
