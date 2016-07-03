import { Component, OnInit,OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-userdetail',
  templateUrl: 'userdetail.component.html',
  styleUrls: ['userdetail.component.css']
})
export class UserDetailComponent implements OnInit {

  sub:any;
  selected:number;
  constructor(private _route:ActivatedRoute) {}

  ngOnInit() {
    this.sub = this._route.params.subscribe(params=>{
      let id = +params['id'];
      this.selected = id;
    });

  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
