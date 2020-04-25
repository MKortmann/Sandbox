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
    email: '',
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
        email: 'john@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true,
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevin@yahoo.com',
        isActive: false,
        registered: new Date('01/11/2017 06:30:00'),
        hide: true,
      },
      {
        firstName: 'Karin',
        lastName: 'Williams',
        email: 'karin@gmail.com',
        isActive: true,
        registered: new Date('01/02/2020 08:30:00'),
        hide: true,
      },
    ];
  }

  // addUser() {
  //   // as push but add it to the begin of the array
  //   console.log(this.user);
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.users.unshift(this.user);

  //   localStorage.setItem(
  //     this.user.firstName.toString(),
  //     JSON.stringify(this.user)
  //   );

  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     age: null,
  //     email: '',
  //   };
  // }

  onSubmit(e) {
    e.preventDefault();
    console.log(123);
  }
}
