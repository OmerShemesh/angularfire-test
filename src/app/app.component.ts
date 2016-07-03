import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

import { UsersComponent } from './users/users.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[UsersComponent,ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'Angular 2!';
  constructor()
  {

    

  }
 
}
