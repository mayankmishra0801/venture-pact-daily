import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
    return [
      {
        id:1,
        name:'Burger',
        cookTime: '20-30',
        price:200,
        favorite:false,
        origins:['italy'],
        star : 4.5,
        imageUrl : '/assets/burgur.jpg',
        tags: ['FastFood','Pizza','Lunch']

      },
     
      {
        id:6,
        name:'Hot Dog',
        cookTime: '0',
        price:40,
        favorite:false,
        origins:['italy'],
        star : 4.5,
        imageUrl : '/assets/hot.jpeg',
        tags: ['FastFood','Pizza','Lunch']

      },
      {
        id:7,
        name:'Pizza',
        cookTime: '10',
        price:80,
        favorite:false,
        origins:['italy'],
        star : 4.5,
        imageUrl : '/assets/pizza.jpeg',
        tags: ['FastFood','Pizza','Lunch']

      },
      {
        id:8,
        name:'Oreo',
        cookTime: '0',
        price:100,
        favorite:false,
        origins:['italy'],
        star : 4.5,
        imageUrl:'./assets/orio.jpg',
        tags: ['FastFood','Pizza','Lunch']

      },
      {
        id:9,
        name:'Cake',
        cookTime: '60',
        price:700,
        favorite:false,
        origins:['italy'],
        star : 4.5,
        imageUrl : './assets/good9.jpg',
        tags: ['FastFood','Pizza','Lunch']

      },

   



      // 
      // 
      // 
      // 
      // 
      // 
      // 
      
      
    ]
  }

}

