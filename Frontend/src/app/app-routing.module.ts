import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteiraComponent } from './views/carteira/carteira.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path: 'home',component: HomeComponent},
  { path: 'carteira', component: CarteiraComponent},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
