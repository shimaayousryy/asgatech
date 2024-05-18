import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public http :HttpClient) { }

  getOrders():Observable<any>{
    return this.http.get<any>('../../../../assets/json/orders.json' )
    
  }

  getOrder(orderId):Observable<any>{
    
    return this.http.get<any>('../../../../assets/json/orders.json').pipe(map(data =>{
      return  data.filter(x=> x.OrderId == orderId)
    }
      
    ))
    
  }



}
