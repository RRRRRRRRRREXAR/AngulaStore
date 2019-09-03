import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoryModel } from './models/categorymodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  public API='https://localhost:44357/api';
  public CATEGORY_API =`${this.API}/Category`;
  constructor(private http:HttpClient) { }
  
  getAll():Observable<Array<CategoryModel>>{
    return this.http.get<Array<CategoryModel>>(this.CATEGORY_API);
  }
  create(category:CategoryModel){
    let result:Observable<CategoryModel>;
    let token =JSON.parse(localStorage.getItem("currentUser"));
    let options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token.token.access_token)
  };
    result=this.http.post<CategoryModel>(this.CATEGORY_API,category,options);
    return result;
  }
}
