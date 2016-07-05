import { Component, OnInit,OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { AngularFire,FirebaseObjectObservable } from 'angularfire2';

import { FORM_DIRECTIVES } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-userdetail',
  templateUrl: 'userdetail.component.html',
  styleUrls: ['userdetail.component.css'],
  directives:[FORM_DIRECTIVES]
})
export class UserDetailComponent implements OnInit {

  sub:any;
  selectedKey:number;
  selectedUser:FirebaseObjectObservable<any>;
  constructor(private _route:ActivatedRoute,private af:AngularFire) {}

  ngOnInit() {
      this._route.params
      .map(params=>{
        return params['key'];
      })
      .subscribe(key=>{
        this.selectedUser = this.af.database.object(`users/${key}`);
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
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
