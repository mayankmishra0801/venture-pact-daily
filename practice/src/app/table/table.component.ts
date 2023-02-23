
import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {
    
    searchText:any;
    heros = [
      {id:11,name:'Ghhhuii',country:'India'},
      {id:12,name:'lrtyyuu',country:'USA'},
      {id:13,name:'bhyubbcc',country:'Germany'},
      {id:14,name:'rtyuucc',country:'Canada'},
      {id:15,name:'gyubmc',country:'Itlay'},
      {id:16,name:'hjkkkc',country:'Thailand'},
      {id:17,name:'hjjjbcc',country:'Australia'},
      {id:18,name:'jkkkkcc',country:'Japan'},
      {id:19,name:'loooiic',country:'Russia'},
      {id:20,name:'zzaajjc',country:'Bhutan'}
    ]
  constructor(){}
  ngOnInit(): void {
      
  }
}
