import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  UserListComponent } from './userList/userList.component';
import { SharedModule } from 'src/app/shared/shared.module';




const routers: Routes = [
    {path:'' ,component:UserListComponent},
    {path:'user' ,component:UserListComponent}
]

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routers),
  ]
})
export class UserModule { }
