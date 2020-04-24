import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  title: String = 'Angular App';
  visible: Boolean = false;

  constructor() {
    console.log(`The title is ${this.title}`);
    console.log(`Printing the localStorage ${localStorage.getItem('title')}`);
    if (
      localStorage.getItem('title') == undefined ||
      localStorage.getItem('title') == null
    ) {
      const newLocal = this.title;
      localStorage.setItem('title', JSON.stringify(newLocal));
    } else {
      this.title = JSON.parse(localStorage.getItem('title'));
    }
  }

  ngOnInit(): void {}

  changeTitle(e) {
    this.visible = true;
    console.log(e);
  }

  // update() {
  //   console.log(`title in update: ${this.title}`);
  //   localStorage.setItem('title', JSON.stringify(this.title));
  // }

  onSubmit(e) {
    localStorage.setItem('title', JSON.stringify(this.title));
    this.visible = false;
  }
}
