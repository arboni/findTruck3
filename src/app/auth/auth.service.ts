import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { User } from './user';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    user: User;

    constructor(
        public router: Router,
        public ngZone: NgZone,
        public afAuth: AngularFireAuth,
        private angularFireAuth: AngularFireAuth
    ) {
        this.afAuth.authState.subscribe(user => {
            this.user = user;
        });
    }

    // Firebase SignInWithPopup
    async OAuthProvider(provider) {
        try {
        const res = await this.afAuth.auth.signInWithPopup(provider);
        this.ngZone.run(() => {
          this.router.navigate(['home']);
        });
      } catch (error) {
        window.alert(error);
      }
    }

    // Firebase Google Sign-in
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
