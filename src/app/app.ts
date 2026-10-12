import { Component, signal } from '@angular/core';
import {Header} from './header/header';
import {User} from './user/user';
import { DUMMY_USERS } from './dummy-users';

@Component({
  imports: [Header, User],
  selector: 'app-root',
  styleUrls: ['./app.css'],
  templateUrl: './app.html'
})
export class App {
  users = DUMMY_USERS;
  protected readonly title = signal('my-first-angular-application');
}
