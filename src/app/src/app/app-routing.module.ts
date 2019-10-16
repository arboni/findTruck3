import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './Drivers/list/list.component';
import { EditComponent } from './Drivers/edit/edit.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent} from './header/header.component';
import { LayoutComponent} from './layout/layout.component';
import { LocalComponent } from './maps/local/local.component';
import { ListCargasComponent } from './cargas/list-cargas/list-cargas.component';
import { EditCargasComponent } from './cargas/edit-cargas/edit-cargas.component';
import { CalculadoraComponent } from './calculadora';


const routes: Routes = [
  { path: 'home', component: HomeComponent} ,
  { path: 'list', component: ListComponent},
  { path: 'edit', component: EditComponent},
  { path: 'local', component: LocalComponent},
  { path: 'editCargas', component: EditCargasComponent},
  { path: 'listCargas', component: ListCargasComponent},
  { path: 'calculadora', component: CalculadoraComponent},




];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
