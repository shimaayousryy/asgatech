import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderListComponent } from './orderList/orderList.component';
import { OrderDetailsComponent } from './orderDetails/orderDetails.component';




const routers: Routes = [
    {path:'' ,component:OrderListComponent},
    {path:'order' ,component:OrderListComponent},
    {path:'orderDetail/:id' ,component:OrderDetailsComponent}

]

@NgModule({
  declarations: [OrderListComponent,OrderDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routers),
  ]
})
export class OrderModule { }
