import { Component, OnInit } from '@angular/core';

// Decorator: we add the metadata here
@Component({
  selector: 'app-user',
  // template: '<h2>John Doe</h2>',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  // styles: [
  //   h3 {
  //     color: blue
  //   }
  // ]
})
export class UserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
