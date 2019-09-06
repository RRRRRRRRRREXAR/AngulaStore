import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { UserModel } from './models/usermodel';
import { TokenModel } from './models/token';

@Injectable({
  providedIn: 'root'
})

export class DataSharingService {
  public isUserLoggedIn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(localStorage.getItem("currentUser")!=null);

  setCurrentUser(value : string){
    localStorage.setItem("currentUser",JSON.stringify(value));
  }
  
  get currentUser(){
    return JSON.parse(localStorage.getItem("currentUser"));
  }
}
