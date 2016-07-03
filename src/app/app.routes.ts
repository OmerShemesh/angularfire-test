import { provideRouter, RouterConfig } from '@angular/router';
import { UsersComponent } from './users/users.component';
import {  UserDetailComponent } from './userdetail/userdetail.component';
import { AppComponent } from './app.component';

export const routes: RouterConfig = [
    
  { path: 'user/:id', component: UserDetailComponent },
  { path: '', redirectTo:'home' },
  { path: 'home',component: AppComponent },

];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];