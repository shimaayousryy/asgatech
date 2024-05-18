import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ListColumn } from "src/app/shared/models/listColumn";
import { Porduct } from "../service/product.model";
import { PageResult } from "src/app/shared/models/pageResult";
import { ProductService } from "../service/product.service";
import { MenuItem } from "primeng/api";
import { ListComponent } from "src/app/shared/list/list.component";


@Component({
    selector: 'app-product',

    templateUrl: './productList.component.html',
    styleUrl: './productList.component.scss'
})

export class ProductListComponent {
  @ViewChild('list') listModal: ListComponent;
  productList:Porduct[]=[]
    listColumns: ListColumn[];
    pageResult: PageResult;
    addationalMenuItems

    pagination={
      rows:10,
      first:0
    }
   constructor(
      private router:Router
    , private productService: ProductService
   ){
    this.pageResult = {};
    this.pageResult.result = [];
   }
   
  
  ngOnInit(): void {
    this.getList(this.pagination)
    this.listColumns = [
      new ListColumn({ field: 'id', header: '#ID', width: 20, hide: true }),
      new ListColumn({ field: 'ProductName', hide: false, header: 'Product Name', width: 20 }),
      new ListColumn({ field: 'ProductPrice', header: 'Product Price',  hide: false,isCurrancy:true, width: 20 }),
      new ListColumn({ field: 'AvailablePieces', hide: false, header: 'Available Pieces', width: 20}),
    ];
    this.addationalMenuItems = [
      { label:'Edit' , visible:true ,visibleCommand:()=>this.listModal?.currMenuRecord?.AvailablePieces < 50 , icon: 'pi pi-fw pi-check', command: () => this.edit(this.listModal?.currMenuRecord?.id),
    }
    ];
  }
  getList(event){
    this.productService.getProducts().subscribe(response =>{
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

