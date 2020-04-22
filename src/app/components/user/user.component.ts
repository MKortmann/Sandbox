import { Component, OnInit } from '@angular/core';

// Decorator: we add the metadata here
@Component({
  selector: 'app-user',
  // template: '<h2>John Doe</h2>',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  // Properties
  firstName: String = 'John';
  lastName: String = 'Doe';
  age: number = 30;
  address = {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA',
  };

  foo: any;
  hasKids: boolean;
  // this has to be an array of numbers
  numberArray: number[];
  stringArray: string[];
  mixedArray: any[];
  myTuple: [string, number, boolean];
  unusable: void;
  u: undefined;
  n: null;

  // Method: Constructor: special component that runs at the moment the component is instantiated
  // Used  to inject dependencies
  constructor() {
    this.hasKids = true;
    this.numberArray = [1, 2, 3];
    this.stringArray = ['hello', 'world'];
    this.mixedArray = [true, undefined, 'hello'];
    this.myTuple = ['hello', 1, true];
    this.unusable = undefined;
    this.u = undefined;
    this.n = null;
    console.log(this.addNumber(1, 4));
  }

  addNumber(num1: number, num2: number): number {
    return num1 + num2;
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`);
  }

  hasBirthday() {
    this.age += 1;
  }

  showAge() {
    return this.age;
  }

  // Lifecycle method that also runs when the component is initialized: used to AJAX calls,
  // server calls
  ngOnInit(): void {}
}
