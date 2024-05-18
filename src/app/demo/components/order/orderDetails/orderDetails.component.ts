import { Component, ViewChild } from "@angular/core";
import { ListColumn } from "src/app/shared/models/listColumn";
import { PageResult } from "src/app/shared/models/pageResult";
import { ListComponent } from "src/app/shared/list/list.component";
import { Order, product } from "../service/order.model";
import { OrderService } from "../service/order.service";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../user/service/user.service";
import { User } from "../../user/service/user.model";
import { ProductService } from "../../product/service/product.service";


@Component({
    selector: 'app-orderDetails',

    templateUrl: './orderDetails.component.html',
    styleUrl: './orderDetails.component.scss'
})

export class OrderDetailsComponent {
    currentId:number;
    selectedOrder:Order;
    userSelected:User;
    productSelected:product[]=[]

   constructor(
      private activateRoute:ActivatedRoute
    , private orderService: OrderService
    , private userService :UserService  
    , private productService :ProductService
    

   ){
    this.activateRoute.params.subscribe(param =>{
        this.currentId = param['id']
    })
   }
   
  
  ngOnInit(): void {
    this.getOrderDetails()
    this.findCustomer()
    this.findProduct()
  
  }
  getOrderDetails(){
    this.orderService.getOrder(this.currentId).subscribe(response =>{
        this.selectedOrder = response[0]
    })
  }

  findCustomer(){
    this.userService.getUsers().subscribe(response =>{
      this.userSelected =  response.filter(x => x.Id == this.selectedOrder.UserId)[0]
    })
  }
  findProduct(){
    this.productService.getProducts().subscribe(response =>{
        for(let i of this.selectedOrder.Products){
            this.productSelected.push(response.filter(x => x.ProductId == i.ProductId)[0])

        }
        console.log('dataaaa',this.productSelected)

    })
  }
  



  

}

