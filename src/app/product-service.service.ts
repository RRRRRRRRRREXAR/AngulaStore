import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {ProductModel} from './models/productmodel';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public API='https://localhost:44357/api';
  public PRODUCT_API =`${this.API}/Product`;
  constructor(private http:HttpClient) { }
  getAll():Observable<Array<ProductModel>>{
    return this.http.get<Array<ProductModel>>(this.PRODUCT_API);
  }
  remove(id:number){
    return this.http.delete(`${this.PRODUCT_API}/${id.toString()}`);
  }
  create(product:ProductModel):Observable<ProductModel>{
    let result:Observable<ProductModel>;
    let token =JSON.parse(localStorage.getItem("currentUser"));
    let options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token.token.access_token)
  };
    result=this.http.post<ProductModel>(this.PRODUCT_API,product,options);
    return result;
  }
  edit(product:ProductModel){
    let result:Observable<ProductModel>;
    result=this.http.put<ProductModel>(this.PRODUCT_API,product);
    return result;
  }
}
