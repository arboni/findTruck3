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
import { LoginComponent } from './login/login.component';
import { AceiteTransporteComponent } from './aceite-transporte/aceite-transporte.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'list', component: ListComponent},
  { path: 'edit', component: EditComponent},
  { path: 'local', component: LocalComponent},
  { path: 'editCargas', component: EditCargasComponent},
  { path: 'listCargas', component: ListCargasComponent},
  { path: 'calculadora', component: CalculadoraComponent},
  { path: 'aceite', component: AceiteTransporteComponent},
  { path: 'chat', component: ChatComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
