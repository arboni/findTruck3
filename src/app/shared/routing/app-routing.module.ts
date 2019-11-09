import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Required components for which route services to be activated

// Import canActivate guard services
import { AuthGuard } from "../../shared/guard/auth.guard";
import { SecureInnerPagesGuard } from "../../shared/guard/secure-inner-pages.guard";
import { LoginComponent } from 'src/app/login/login.component';
import { HomeComponent } from 'src/app/home/home.component';
import { ListComponent } from 'src/app/Drivers/list/list.component';
import { ListCargasComponent } from 'src/app/cargas/list-cargas/list-cargas.component';
import { LocalComponent } from 'src/app/local/local.component';
import { CalculadoraComponent } from 'src/app/calculadora/components/calculadora.component';

// Include route guard in routes array
const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard]},
   { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'list', component: ListComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'listCargas', component: ListCargasComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'local', component: LocalComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'calculadora', component: CalculadoraComponent, canActivate: [SecureInnerPagesGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
