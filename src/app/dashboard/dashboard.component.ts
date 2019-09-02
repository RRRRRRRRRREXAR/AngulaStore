import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import { UserModel } from '../models/usermodel';
import { AuthorizeService } from '../authorize.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
}) 
export class DashboardComponent implements OnInit {

  isUserLoggedIn:boolean;
  currentUser:any;
  constructor(private dataSharingService:DataSharingService,private authirizeService:AuthorizeService) {

     this.dataSharingService.currentUser.subscribe(value=>{
       
    this.currentUser=value;
    });
    
    this.dataSharingService.isUserLoggedIn.subscribe(value=>{
      this.isUserLoggedIn=value;}
      )

  }
  logOut(){
    this.authirizeService.logout();
  }
  ngOnInit() {
    this.currentUser=this.dataSharingService.currentUser;
  }
  
}
