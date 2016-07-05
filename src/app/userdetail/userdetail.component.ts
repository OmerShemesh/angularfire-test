import { Component, OnInit,OnDestroy } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';

import { AngularFire,FirebaseObjectObservable } from 'angularfire2';

import { NgForm } from '@angular/forms';

import { User } from '../user';

@Component({
  moduleId: module.id,
  selector: 'app-userdetail',
  templateUrl: 'userdetail.component.html',
  styleUrls: ['userdetail.component.css'],
  
})
export class UserDetailComponent implements OnInit {

  sub:any;
  selectedKey:number;
  selectedUser:FirebaseObjectObservable<any>;
  model:User;
  constructor(private _activatedRoute:ActivatedRoute,private af:AngularFire,private _router:Router) {}

  ngOnInit() {
      this._activatedRoute.params
      .map(params=>{
        return params['key'];
      })
      .subscribe(key=>{
        this.selectedKey = key;
        this.selectedUser = this.af.database.object(`users/${key}`);
        this.selectedUser.subscribe(user=>{
        this.model = user;
        });
      });
    

  }
  updateUser(id:number,firstName:string,lastName:string,email:string){
    // this.selectedUser.update(
    //   {
    //     id:id,
    //     first_name:firstName,
    //     last_name:lastName,
    //     email:email
    //   }
    // );
    alert(firstName);
    
  }

  deleteUser(key)
  {
    this.af.database.list('/users').remove(key);
    this._router.navigate(['']);
  }


  
}
