import { Component, ElementRef, HostListener, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})

export class Assignment4Component {
  
  constructor(private el:ElementRef,private renderer: Renderer2){

  }

  @HostListener('click') onclick(){
    alert("Hello World");
  }
  @HostListener('mouseover') onmouseover(){
    this.changebgColor('red');
    console.log('mouseover');
  }
  changebgColor(color:string){
    this.renderer.setStyle(this.el.nativeElement,'color',color);
  }
  @HostListener('mouseleave') onmouseleave(){
    this.changebgColor('blue');
  }
}
