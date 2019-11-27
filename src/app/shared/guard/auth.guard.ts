import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AuthService } from 'src/app/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {

          if(this.authService.usuarioEstaAutenticado()){
            return true;
          }

          if (localStorage['token'] != null) {
            return true;
        } else {
          this.router.navigate(['/auth']);
          return false;
        }
    }
}
