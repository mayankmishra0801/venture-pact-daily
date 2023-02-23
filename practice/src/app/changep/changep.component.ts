import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-changep',
  templateUrl: './changep.component.html',
  styleUrls: ['./changep.component.css']
})
export class ChangepComponent implements OnChanges, DoCheck {
    logs : string[] = [];
    textBoxValue = "";

    ngOnChanges(changes: SimpleChanges): void {
        this.logs.push('On Changes is triggered');
    }

    ngDoCheck(): void {
        this.logs.push('Do Check is triggered');
    }

    onTextChange(value:any){

      this.textBoxValue = value;
      console.log("Text is getting changed");

    }

}
