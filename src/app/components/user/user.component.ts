import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

// Decorator: we add the metadata here
@Component({
  selector: 'app-user',
  // template: '<h2>John Doe</h2>',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  // Properties
  // pointing to the user interface
  user: User;
  // Method: Constructor: special component that runs at the moment the component is instantiated
  // Used  to inject dependencies
  constructor() {}

  // Lifecycle method that also runs when the component is initialized: used to AJAX calls,
  // server calls
  ngOnInit(): void {
    // The ngOnInit is the best place to add values to interfaces!
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      address: {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA',
      },
    };
  }
}
