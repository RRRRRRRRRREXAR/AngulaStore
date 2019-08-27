import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
