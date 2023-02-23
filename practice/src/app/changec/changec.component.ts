import { Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-changec',
  templateUrl: './changec.component.html',
  styleUrls: ['./changec.component.css']
})
export class ChangecComponent implements OnChanges,DoCheck{
  logs : string[] = [];

  @Input() inputValue = "";

  ngOnChanges(changes: SimpleChanges): void {
      this.logs.push('On Changes is triggered');
  }

  ngDoCheck(): void {
      this.logs.push('Do Check is triggered');
  }
}
