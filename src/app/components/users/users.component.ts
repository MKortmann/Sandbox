import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: '',
    },
  };
  showExtended: boolean = true;
  // fechting data from outside source
  loaded: boolean = true;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

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
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true,
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
        isActive: false,
        registered: new Date('01/11/2017 06:30:00'),
        hide: true,
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
        isActive: true,
        registered: new Date('01/02/2020 08:30:00'),
        hide: true,
      },
    ];
  }

  addUser() {
    // as push but add it to the begin of the array
    console.log(this.user);
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);

    localStorage.setItem(
      this.user.firstName.toString(),
      JSON.stringify(this.user)
    );

    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: '',
      },
    };
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(123);
  }

  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value);
  }

  // toggleHide(user: User) {
  //   user.hide = !user.hide;
  //   console.log(user);
  // }
}
