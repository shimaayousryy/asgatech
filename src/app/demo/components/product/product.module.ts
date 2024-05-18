import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './productList/productList.component';
import { SharedModule } from 'src/app/shared/shared.module';




const routers: Routes = [
    {path:'' ,component:ProductListComponent},
    {path:'product' ,component:ProductListComponent}
]

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routers),
  ]
})
export class ProductModule { }
