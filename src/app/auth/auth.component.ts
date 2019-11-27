import { Component, OnInit, EventEmitter } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  showMenu = new EventEmitter<boolean>();
  userData: any;
  router: any;
  profile: string;

  ngOnInit(): void {
    this.authService.subscribe(
      showM => {
        return this.showMenu = showM;
      }
    )
  }
  constructor( public authService: AuthService) {}

  email: string;
  password: string;


  signUp() {
    this.authService.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';

  }

  signIn() {
    this.authService.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
    if (this.email === 'arboniguitar@gmail.com'){
      this.profile = 'admin';
    }else{
      this.profile = 'normal';
    }
  }

  signOut() {
    this.authService.SignOut();
  }

}
