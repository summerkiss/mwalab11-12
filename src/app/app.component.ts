import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public message2 = "Message 2 from Parent Component";
  public message3 = "Message 3 from Parent Component";

  public counter:number = 100;

  public outputData;

  showOutputData(data){
    this.outputData = data;
  }

  showCounter(data){
    this.counter = data;
  }
}
