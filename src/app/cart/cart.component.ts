import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CartServiceService } from '../cart-service.service';
import { ProductModel } from '../models/productmodel';
import { OrderServiceService } from '../order-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router:Router,public dialogRef: MatDialogRef<CartComponent>,private cartService:CartServiceService,private orderService:OrderServiceService) { }
  cart: Array<ProductModel>;
  ngOnInit() {
    this.cartService.getAll().subscribe(data=>{
      this.cart=data;
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onProceed(){
    this.router.navigate(['order']);
    this.dialogRef.close();
  }
  removeItem(id:number){
    this.cartService.removeItem(id).subscribe();
    this.cart.splice(id,1);
  }
  
}
