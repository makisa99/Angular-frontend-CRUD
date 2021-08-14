import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CreateComponent} from './create/create.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {LoginComponent} from './login/login.component';
import {LoggedInGuard} from './logged-in.guard';
import { AUTH_PROVIDERS } from './auth.service';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'automobili',
    component: HomeComponent,
  },
  {
    path: 'automobili/:id',
    component: HomeComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [ LoggedInGuard ]
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
