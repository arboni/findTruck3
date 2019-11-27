import { Component, OnInit } from '@angular/core';
import { UserService } from '../sharedUsers/user.service';
import { UserDataService } from '../sharedUsers/user-data.service';
import { User } from '../sharedUsers/user';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  user: User;
  key: string= '';
  email: string = '';
  tipoUser: string = '';
  password: string = '';
  id: string;


  constructor(private userService: UserService, private userDataService: UserDataService ) { }

  ngOnInit() {
    this.user = new User();
    this.userDataService.currentUser.subscribe(data => {
      if (data.user && data.key) {
        this.user = new User();
        this.user.nome = data.user.nome;
        this.user.email = data.user.email;
        this.user.password = data.user.password;
        this.user.id = data.user.id;
        this.user.tipoUser = data.user.tipoUser;
        this.key = data.key;
      }
    });
  }

  onSubmit() {
    if (this.key) {
      this.userService.updateUser(this.user, this.key);
    } else {
      this.userService.insertUser(this.user);
    }

    this.user = new User();
  }
}


