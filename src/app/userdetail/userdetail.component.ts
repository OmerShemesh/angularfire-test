import { Component, OnInit,OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { AngularFire,FirebaseObjectObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-userdetail',
  templateUrl: 'userdetail.component.html',
  styleUrls: ['userdetail.component.css']
})
export class UserDetailComponent implements OnInit {

  sub:any;
  selectedKey:number;
  selectedUser:FirebaseObjectObservable<any>;
  constructor(private _route:ActivatedRoute,private af:AngularFire) {}

  ngOnInit() {
    this.sub = this._route.params.subscribe(params=>{
      this.selectedKey = params['key'];
    });

    this.selectedUser = this.af.database.object('/users/'+this.selectedKey);
    

  }
  updateUser(id:number,firstName:string,lastName:string,email:string){
    this.selectedUser.update(
      {
        id:id,
        first_name:firstName,
        last_name:lastName,
        email:email
      }
    );
    
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
