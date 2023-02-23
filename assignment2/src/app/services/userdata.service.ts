import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  number = 1
  constructor(){}
    addnumber(){
      this.number=this.number+1
    }
  }

