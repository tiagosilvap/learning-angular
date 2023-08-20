import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: User[] = [];

  addUser(user : User) {
    this.users.push(user);
  }
}

interface User {
  id: number
  name: string
}
