import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http :HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get<any>('../../../../assets/json/users.json' )
    
  }

}
