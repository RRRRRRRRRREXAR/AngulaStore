import { Injectable } from '@angular/core';
import { ProductModel } from './models/productmodel';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  
  constructor(private http:HttpClient) { }
  public API='https://localhost:44357/api';
  public ORDER_API =`${this.API}/Order`;
  makeOrder(){
    let result:Observable<any>;
    let body2 = {Token:localStorage.getItem("cartToken")};
    let token =JSON.parse(localStorage.getItem("currentUser"));
    let options = {
    headers: new HttpHeaders().set('Authorization', 'Bearer '+token.token.access_token)};
    result=this.http.post(`${this.ORDER_API}`,body2,options);
    return result;
  }
}
