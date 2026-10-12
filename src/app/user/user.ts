import { Component, Input, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  imports: [],
  selector: 'app-user',
  styleUrls: ['./user.css'],
  templateUrl: './user.html',
})
export class User {

  users = DUMMY_USERS;

  @Input() avatar! : string;
  @Input() name! : string;

  selectedUser = signal(DUMMY_USERS[randomIndex]);

  imagePath = computed(() => this.selectedUser().avatar)

  onSelectUser() {
    console.log('Clicked!');
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
