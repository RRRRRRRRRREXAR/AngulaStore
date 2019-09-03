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
    return this.http.get<Array<ProductModel>>(this.CART_API);
  }
  removeItem(id:number){
    let result:Observable<any>;
    let params = new HttpParams()
    .set('id',id.toString() )
    .set('token', sessionStorage.getItem["token"]);
    result=this.http.delete(`${this.CART_API}/`,{params:params});
    return result;
  }
  addItem(id:number){
    return this.http.post(`${this.CART_API}/${id.toString()}`,id);
  }
}
