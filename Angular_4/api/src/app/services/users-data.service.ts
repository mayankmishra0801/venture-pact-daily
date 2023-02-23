import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  url = "http://localhost:3000/users";
  constructor(private http:HttpClient) {
    
   }
   users(){
    return this.http.get('')
   }

   users(){
    // return this.http.get(this.url)
    return [ {
      name:'Anil',age :28,email:'anil@test.com'    },
      {
        name:'Sam',age :25,email:'sam@test.com'    },
        {
          name:'Peter',age :28,email:'peter@test.com'    }, 
  ]
}
}
