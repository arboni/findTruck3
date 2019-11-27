import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private usuarioautenticado : boolean = false;

  constructor(public angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
  }
  userData: Observable<firebase.User>;
  router: Router;
  showMenu: boolean = false;
  showMenuEmitter = new EventEmitter();
  subscribe(arg0: (showM: any) => any) {
    throw new Error("Method not implemented.");
  }

  public login(mail: string, password: string) {
    return new Promise((resolve, reject) => {
    this.angularFireAuth.auth.signInWithEmailAndPassword(mail, password).then((user) => {
    localStorage['token'] = user.user;
    this.usuarioautenticado = true;

    //this.router.navigate(['/home']);

    })
                    .catch((error) => {
                        //this.router.navigate(['/auth']);
                        this.showMenuEmitter.emit('falha na autenticação', false);
                        this.usuarioautenticado = false;
                    });
            })
                .catch((error) => {
                   // this.router.navigate(['/auth']);
                    this.showMenuEmitter.emit( 'falha na autenticação', false);
                    this.usuarioautenticado = false;
                });
        }
    public logout() {
            return this.angularFireAuth.auth.signOut();
        }
  /* Sign up */
  SignUp(email: string, password: string) {
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('You are Successfully signed up!', res);
        this.usuarioautenticado = true;
        //this.router.navigate(['/home']);
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
        this.usuarioautenticado = false;

      });
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('You are Successfully logged in!');
        this.showMenuEmitter.emit('usuário Autenticado', true);
        this.usuarioautenticado = true;
        //this.router.navigate(['/home']);
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
        this.usuarioautenticado = false;
        //this.router.navigate(['auth']);

      });
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth
      .auth
      .signOut();
      //this.router.navigate(['auth']);

  }

  usuarioEstaAutenticado(){
    return this.usuarioautenticado;
  }

}
