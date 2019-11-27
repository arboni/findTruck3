import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Required components for which route services to be activated

// Import canActivate guard services
import { AuthGuard } from "../../shared/guard/auth.guard";
import { SecureInnerPagesGuard } from "../../shared/guard/secure-inner-pages.guard";
import { HomeComponent } from 'src/app/home/home.component';
import { ListComponent } from 'src/app/Drivers/list/list.component';
import { ListCargasComponent } from 'src/app/cargas/list-cargas/list-cargas.component';
import { LocalComponent } from 'src/app/local/local.component';
import { CalculadoraComponent } from 'src/app/calculadora/components/calculadora.component';
import { AuthComponent } from 'src/app/auth/auth.component';
import { EditComponent } from 'src/app/Drivers/edit/edit.component';
import { EditCargasComponent } from 'src/app/cargas/edit-cargas/edit-cargas.component';
import { AceiteTransporteComponent } from 'src/app/aceite-transporte/aceite-transporte.component';
import { ChatComponent } from '../../chat/chat.component';

// Include route guard in routes array
const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  { path: 'auth', component: AuthComponent},
  { path: 'home', component: HomeComponent},
  { path: 'list', component: ListComponent},
  { path: 'edit', component: EditComponent},
  { path: 'local', component: LocalComponent},
  { path: 'editCargas', component: EditCargasComponent},
  { path: 'listCargas', component: ListCargasComponent},
  { path: 'calculadora', component: CalculadoraComponent},
  { path: 'aceite', component: AceiteTransporteComponent},
  { path: 'chat', component: ChatComponent},

  /*{ path: '', redirectTo: '/auth', pathMatch: 'full'},
  { path: 'auth', component: AuthComponent, canActivate: [SecureInnerPagesGuard]},
   { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'list', component: ListComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'listCargas', component: ListCargasComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'local', component: LocalComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'calculadora', component: CalculadoraComponent, canActivate: [SecureInnerPagesGuard] }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
