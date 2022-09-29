import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Title';

  count = 0;
  number1 = 0;
  number2 = 0;
  number3 = 0;
  result = 0;

  add = () => {
   this.number3 = this.number1 + this.number2;
  }

  listOfNumbers = [12, 43, 543, 53, 1]

  listOfName = ["Raj", "Pranish", "Diwas Aalmond"]

  increment = () => {
    this.count++;
  }

  Decrement = () => {
    this.count--;
  }


}
