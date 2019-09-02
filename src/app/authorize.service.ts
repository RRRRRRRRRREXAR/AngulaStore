import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from './models/usermodel';
import { Observable } from 'rxjs';
import { RegisterBindingModel } from './models/registermodel';
import { LoginModel } from './models/loginmodel';
import { DataSharingService } from './data-sharing.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {
  public API='https://localhost:44357/api';
  public ACCOUNT_API=`${this.API}/Account`;
  constructor(private http:HttpClient,private dataSharingService:DataSharingService) { }

  login(user :LoginModel):Observable<UserModel>
  {
    let result:Observable<UserModel>;
    
    let body = `username=${user.username}&password=${user.password}&grant_type=password`;
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };
    result=this.http.post<UserModel>("https://localhost:44357/Token",body,options);
    return result;
  }
  logout(){
    
    this.dataSharingService.setCurrentUser=null;
    localStorage.removeItem("currentUser");
    this.dataSharingService.isUserLoggedIn.next(false);

  }
  register(user:RegisterBindingModel):Observable<UserModel>{
    let result:Observable<UserModel>;
    

    let body = `username=${user.Email}&password=${user.Password}&grant_type=password`;
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };
    result=this.http.post<UserModel>("https://localhost:44357/api/Account/Register",body,options);
   return result;
  }
}
