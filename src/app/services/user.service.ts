import { Injectable } from '@angular/core';
// of -> it let us declare an array as an observable
import { Observable, of } from 'rxjs';

import { User } from '../models/User';

// this class has an injectable decorator. This marks the class as one that
// participates in the dependency injection system.
@Injectable({
  // A provider is something that can create or deliver a service
  // By default the Angular CLI command ng generate service registers a provider with the
  // root injector for your service by including provider metadata,
  // that is providedIn: "root" in the @Injectable() decorator.
  providedIn: 'root',
})

// the data service can get data from anywhere - a web service, local storage or a
// mock data source.
// Important: removing data access from components means you can change your mind about
// the implementation anytime, without touching any components. They don't know how the
// service works.
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
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

  getData() {
    // we can subscribe to this observable and it will give us a data stream that each second
    // fecth and send us data.
    this.data = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    console.log('Fetching users from service...');
    return of(this.users);
  }

  addUser(user) {
    this.users.unshift(user);
  }
}
