import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { componentFactoryName } from '@angular/compiler';
import { AuthService } from './auth.service';
import { auth } from 'firebase';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  [x: string]: any;
  isLoginMode = true;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();
  }

  SigninWithGoogle() {
    return this.OAuthProvider(new auth.GoogleAuthProvider())
        .then(res => {
            console.log('Successfully logged in!');
        }).catch(error => {
            console.log(error);
        });
}

// Firebase Logout
SignOut() {
    return this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['login']);
    });
}

}
