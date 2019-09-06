import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import { UserModel } from '../models/usermodel';
import { AuthorizeService } from '../authorize.service';
import { TokenModel } from '../models/token';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
}) 
export class DashboardComponent implements OnInit {

  isUserLoggedIn:boolean;
  currentUser:any;
  constructor(private dataSharingService:DataSharingService,private authirizeService:AuthorizeService,public dialog: MatDialog) {

    this.dataSharingService.isUserLoggedIn.subscribe(value=>{
      
      this.isUserLoggedIn=value;
      
      
    });

  }
  logOut(){
    this.authirizeService.logout();
  }
  ngOnInit() {
    this.currentUser=this.dataSharingService.currentUser;
  }
  openCart():void{
    const dialogRef = this.dialog.open(CartComponent, {
      width: '50em',
      
    });
    
  }
}
