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
import { ModalComponent } from './modal/modal.component';
import { DriverService } from 'dist/src/app/Drivers/shared/driver.service';
import { AuthComponent } from './auth/auth.component';
import { User } from './users/sharedUsers/user';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { UserService } from './users/sharedUsers/user.service';






const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'auth', component: AuthComponent},
  { path: 'home', component: HomeComponent},
  { path: 'list', component: ListComponent},
  { path: 'edit', component: EditComponent},
  { path: 'local', component: LocalComponent},
  { path: 'editCargas', component: EditCargasComponent},
  { path: 'listCargas', component: ListCargasComponent},
  { path: 'calculadora', component: CalculadoraComponent},
  { path: 'modal', component: ModalComponent},
  { path: 'editUsers', component: EditUsersComponent},
  { path: 'listUsers', component: ListUsersComponent},

]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
