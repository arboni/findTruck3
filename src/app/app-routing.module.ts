import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './Drivers/list/list.component';
import { EditComponent } from './Drivers/edit/edit.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent} from './header/header.component';
import { LayoutComponent} from './layout/layout.component';
import { LocalComponent } from './local/local.component';
import { ListCargasComponent } from './cargas/list-cargas/list-cargas.component';
import { EditCargasComponent } from './cargas/edit-cargas/edit-cargas.component';
import { CalculadoraComponent } from './calculadora/components/calculadora.component';
import { GoogleMapsAPIWrapper} from '@agm/core';
import { DriverService } from './Drivers/shared/driver.service';
import { AuthComponent } from './auth/auth.component';
import { AceiteTransporteComponent } from './aceite-transporte/aceite-transporte.component';
import { ChatComponent } from './chat/chat.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { ListUsersComponent } from './users/list-users/list-users.component';




const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  { path: 'home', component: HomeComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'list', component: ListComponent, canActivate:[AuthGuard]},
  { path: 'edit', component: EditComponent, canActivate:[AuthGuard]},
  { path: 'local', component: LocalComponent, canActivate:[AuthGuard]},
  { path: 'editCargas', component: EditCargasComponent,canActivate:[AuthGuard]},
  { path: 'listCargas', component: ListCargasComponent,canActivate:[AuthGuard]},
  { path: 'calculadora', component: CalculadoraComponent, canActivate:[AuthGuard]},
  { path: 'aceite', component: AceiteTransporteComponent, canActivate:[AuthGuard]},
  { path: 'chat', component: ChatComponent, canActivate:[AuthGuard]},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
