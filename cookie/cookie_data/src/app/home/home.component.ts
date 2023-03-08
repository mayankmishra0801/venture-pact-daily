import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
   constructor(private cookie:CookieService){}
   cookiebox:boolean = false;

   ngOnInit(): void {

   }

   Check(){

    const checking =    this.cookie.check('data');

    if(checking){
      this.cookiebox = false;
    }
    else{
        this.cookiebox =  true;
    }
   }

   Allow(){
    this.cookie.set('data','codetodo',{expires:1})

    this.cookiebox = false;
   }

   Decline(){
      this.cookiebox = false;
   }
   Delete(){
    this.cookie.delete('data');

   }
}
