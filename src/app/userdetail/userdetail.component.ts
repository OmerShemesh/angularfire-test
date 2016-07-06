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
  constructor(private _activatedRoute:ActivatedRoute,private af:AngularFire,private _router:Router) {}

  ngOnInit() {
      this._activatedRoute.params
      .map(params=>{
        return params['key'];
      })
      .subscribe(key=>{
        this.selectedKey = key;
        this.selectedUser = this.af.database.object(`users/${key}`);
      });
    

  }
  updateUser(id:number,first_name:string,last_name:string,email:string)
  {
    
    this.selectedUser.update({
      id:id,
      first_name:first_name,
      last_name:last_name,
      email:email

    });
    this._router.navigate(['']);
    
  }

  deleteUser(key)
  {
    this.af.database.list('/users').remove(key);
    this._router.navigate(['']);
  }

  
  
}
