import { Component, OnInit,Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() parentComponent:EventEmitter<any> = new EventEmitter()

  @Input() hero: any = null;
  constructor(){}
  ngOnInit(): void {
      this.parentComponent.emit("Hii Mayank");
      this.parentComponent.emit ({name:'Anil',age:30})
      console.warn(this.hero)
  }
  sendData(){
    let  data1 ={name:'Mayank',age:22}
     this.parentComponent.emit(data1)
     this.parentComponent.emit([1,2,3,4,5])
  }
}
