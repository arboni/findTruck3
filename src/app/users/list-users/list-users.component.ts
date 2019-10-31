import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../sharedUsers/user.service';
import { User } from '../sharedUsers/user';
import { UserDataService } from '../sharedUsers/user-data.service';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: Observable<any>;

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private userService: UserService, private UserDataService: UserDataService) { }

  ngOnInit() {
    this.users = this.userService.getAllUsers();
  }

  deleteUser(key: string) {
    this.userService.deleteUser(key);
  }

  editUser(user: User, key: string) {
    this.UserDataService.changeUser(user, key);
  }

}
