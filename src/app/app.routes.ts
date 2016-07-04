import { provideRouter, RouterConfig } from '@angular/router';
import { UsersComponent } from './users/users.component';
import {  UserDetailComponent } from './userdetail/userdetail.component';
import { AppComponent } from './app.component';

export const routes: RouterConfig = [
    
  { path: 'user/:key', component: UserDetailComponent },
  { path: '',redirectTo:'/home',pathMatch:'full' },
  { path: 'home',component:  UsersComponent},

];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];