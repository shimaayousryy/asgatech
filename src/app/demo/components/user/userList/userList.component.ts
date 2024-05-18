import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ListColumn } from "src/app/shared/models/listColumn";
import { PageResult } from "src/app/shared/models/pageResult";
import {  UserService } from "../service/user.service";
import { ListComponent } from "src/app/shared/list/list.component";


@Component({
    selector: 'app-user',

    templateUrl: './userList.component.html',
    styleUrl: './userList.component.scss'
})

export class UserListComponent {
  @ViewChild('list') listModal: ListComponent;
    listColumns: ListColumn[];
    pageResult: PageResult;
    addationalMenuItems

    pagination={
      rows:10,
      first:0
    }
   constructor(
      private router:Router
    , private userService: UserService
   ){
    this.pageResult = {};
    this.pageResult.result = [];
   }
   
  
  ngOnInit(): void {
    this.getList(this.pagination)
    this.listColumns = [
      new ListColumn({ field: 'id', header: '#ID', width: 20, hide: true }),
      new ListColumn({ field: 'Name', hide: false, header: 'Name', width: 20 }),
      new ListColumn({ field: 'Email', header: 'Email',  hide: false , width: 20 }),
      new ListColumn({ field: 'Phone', hide: false, header: 'Phone', width: 20}),
      new ListColumn({ field: 'Address', hide: false, header: 'Address', width: 40}),

    ]; 
    this.addationalMenuItems = [
      { label:'Edit' , visible:true ,visibleCommand:()=>this.listModal?.currMenuRecord?.AvailablePieces < 50 , icon: 'pi pi-fw pi-check', command: () => this.edit(this.listModal?.currMenuRecord?.id),
    }
    ];
  }
  getList(event){
    this.userService.getUsers().subscribe(response =>{
      this.pageResult.result = response.slice(event.first, event.first+event.rows)
      this.pageResult.total = response.length
    })
  }
  
  changePage(event){
    this.getList(event)
  }

  edit(value){

  }
  

}

