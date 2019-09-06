import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from './models/productmodel';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  public API='https://localhost:44357/api';
  public CART_API =`${this.API}/Cart`;
  constructor(private http:HttpClient) { }
  getAll():Observable<Array<ProductModel>>{
    let params = new HttpParams()
    .set('token', localStorage.getItem("cartToken"));
    return this.http.get<Array<ProductModel>>(this.CART_API,{params:params});
  }
  getCartToken():Observable<string>{
    let result = new Observable<string>();
    result=this.http.get<string>(this.CART_API);
    return result
  }
  removeItem(id:number){
    let result:Observable<any>;
    let params = new HttpParams()
    .set('id',id.toString() )
    .set('token', localStorage.getItem("cartToken"));
    result=this.http.delete(`${this.CART_API}`,{params:params});
    return result;
  }
  addItem(id:number){
    let result:Observable<any>;
    let body2 = {Id:id,Token:localStorage.getItem("cartToken")};
    result=this.http.post(`${this.CART_API}`,body2);
    return result;
  }
}
