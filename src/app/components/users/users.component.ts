import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  // fechting data from outside source
  loaded: boolean = true;

  constructor() {
    // USED TO DEPENDENCIES INJECTION
    console.log('Constructor running here!');
  }

  // this is the lifeCycleMethod called on initialization
  ngOnInit(): void {
    // this is asynchronous. .subscribe = .then
    // USED TO AJAX CALL; server calls

    //set time out
    // setTimeout(() => {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA',
        },
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 34,
        address: {
          street: '550 Main st',
          city: 'New York',
          state: 'SDF',
        },
      },
      {
        firstName: 'Karin',
        lastName: 'Williams',
        age: 26,
        address: {
          street: '55 Mill st',
          city: 'Miami',
          state: 'FL',
        },
      },
    ];

    this.addUser({
      firstName: 'David',
      lastName: 'Jackson',
    });
    // this.users = [];
    // this.loaded = true;
    // }, 2000);

    // this.showExtended = false;

    // this.users = [];
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
