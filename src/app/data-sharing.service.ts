import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { UserModel } from './models/usermodel';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  public isUserLoggedIn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(localStorage.getItem("currentUser")!=null);
  itemValue= new Subject();

   setCurrentUser(value : string){
    this.itemValue.next(value);
    localStorage.setItem("currentUser",value)
  }
  
  get currentUser(){
    return of(JSON.parse(localStorage.getItem("currentUser")));
  }
}
