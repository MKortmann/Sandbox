import { Component, OnInit, ViewChild } from '@angular/core';
// ViewChild give us an access to a child component

import { UserService } from '../../services/user.service';

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
  // add to the form a view child decorator and pass the name of the form
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private userService: UserService) {
    // USED TO DEPENDENCIES INJECTION
    console.log('Constructor running here!');
  }

  // this is the lifeCycleMethod called on initialization
  ngOnInit(): void {
    // this is asynchronous. .subscribe = .then
    // USED TO AJAX CALL; server calls
    //set time out
    // setTimeout(() => {

    // subscribe to an abservable
    this.userService.getData().subscribe((data) => {
      console.log(data);
    });
    // we are getting users through the observable
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      this.loaded = true;
    });
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.userService.addUser(value);
      // this.users.unshift(value);
      this.form.reset();
    }
  }
}
