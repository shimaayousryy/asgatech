import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ListColumn } from "src/app/shared/models/listColumn";
import { PageResult } from "src/app/shared/models/pageResult";
import { ListComponent } from "src/app/shared/list/list.component";
import { Order } from "../service/order.model";
import { OrderService } from "../service/order.service";


@Component({
    selector: 'app-order',

    templateUrl: './orderList.component.html',
    styleUrl: './orderList.component.scss'
})

export class OrderListComponent {
  @ViewChild('list') listModal: ListComponent;
    listColumns: ListColumn[];
    pageResult: PageResult;
    

    pagination={
      rows:10,
      first:0
    }
   constructor(
      private router:Router
    , private orderService: OrderService
   ){
    this.pageResult = {};
    this.pageResult.result = [];
   }
   
  
  ngOnInit(): void {
    this.getList(this.pagination)
    this.listColumns = [
      new ListColumn({ field: 'id', header: '#ID', width: 5, hide: true }),
      new ListColumn({ field: 'OrderId', hide: false, header: 'Order', width: 40 }),
      new ListColumn({ field: 'OrderDate', header: 'Order Date',  hide: false,isDate:true, width: 40 }),
      new ListColumn({ field: 'PaymentType', hide: false, header: 'PaymentType', width: 40}),
    ];
  
  }
  getList(event){
    this.orderService.getOrders().subscribe(response =>{
      this.pageResult.result = response.slice(event.first, event.first+event.rows)
      this.pageResult.total = response.length
    })
  }
  
  changePage(event){
    this.getList(event)
  }

  view(value){
    debugger
    this.router.navigate(['/order/orderDetail' , value.currentRow.OrderId])
  }
  

}

