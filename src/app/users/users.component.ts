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
    this.af.database.list('/users').push(
        {
          first_name:this.model.firstName,
          last_name:this.model.lastName,
          id:this.model.id,
          email:this.model.email 
          
        }
      
      );
    //console.log(JSON.stringify(this.model))
  }

  deleteUser(id)
  {
    this.af.database.list('/users').remove(id);
  }

  goToUserDetails(id){
    this._router.navigate(['user',id])
  }
  ngOnInit() {
  }

}
