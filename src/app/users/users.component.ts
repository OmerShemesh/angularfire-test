import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { NgForm }    from '@angular/common';
import { User } from '../user';
import { Router } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css']
})
export class UsersComponent implements OnInit {

  items:FirebaseListObservable<any[]>;

  model = new User(22,"Omer","Shemesh","omer@gmail.com");
  constructor(private af:AngularFire,private _router:Router)
  {
    this.items = af.database.list('/users');
    

  }
  addUser()
  {
    this.af.database.list('/users').push(this.model);
    //console.log(JSON.stringify(this.model))
  }

  

  goToUserDetails(key){
    this._router.navigate(['user',key])
  }
  ngOnInit() {
  }

}
