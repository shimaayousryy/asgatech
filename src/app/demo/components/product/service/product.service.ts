import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http :HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get<any>('../../../../assets/json/porducts.json' )
    
  }

}
