import { Component } from "@angular/core";

import { FormBuilder, FormControl, FormGroup, UntypedFormArray, UntypedFormGroup, Validators } from "@angular/forms";
import { product } from "../service/order.model";
import { Subscription, forkJoin } from "rxjs";
import { ProductService } from "../../product/service/product.service";
import { OrderService } from "../service/order.service";
import { Router } from "@angular/router";


@Component({
    selector: 'app-addOrder',

    templateUrl: './orderAddEdit.component.html',
    styleUrls:[ './orderAddEdit.component.scss' , '../../../../shared/mainStyle.scss']
   
})

export class OrderAddEditComponent {
    form = new UntypedFormGroup({})
    productList:product[]=[];
    subscription:Subscription;
    isShowModel:Boolean = false
    paymentTypeOption=[
        {label:'Cash', value:'Cash'},
        {label:'Online' ,value:'Online'},
    ]
   constructor(
    private productService:ProductService,
    private formBuilder:FormBuilder,
    private orderService:OrderService,
    private router :Router
   ){
   }
   
  ngOnInit(): void {
    this.initializeForm()
   
    this.addProduct(undefined)
    // grouped for multi requests
    this.subscription = forkJoin(this.productService.getProducts()).subscribe(response =>{
        this.productList = response[0];
      })
  }
 
     
  initializeForm(){
    this.form = this.formBuilder.group({
      OrderId: new FormControl<number>(Math.floor(Math.random()*(900))),
      Products :this.formBuilder.array([]),
      PaymentType:['', Validators.required],
    })
   }

   products(): UntypedFormArray {
    return this.form.get('Products') as UntypedFormArray;
  }
  
  addProduct(t: any) {
    if (!t) {
      t = {
        ProductId: 0,
        Quantity: '',
      
      };
    }

    let product: UntypedFormGroup = this.formBuilder.group({
        ProductId: t.ProductId,
        Quantity: t.Quantity,
    });
    
    this.products().push(product);
  }

  removeProduct(product: number) {
    if (this.products().length > 1) {
      this.products().removeAt(product);
    }
  }
  
   save(){
      console.log(this.form.value)
      this.orderService.addOrder(this.form.value).subscribe(response =>{
         if(response){
          this.isShowModel =true
         }
      })
   }

   cancelSave(){

   }
  
   closeModel(){
    this.isShowModel =false
       
    this.router.navigate(['/order'])
   }
}

