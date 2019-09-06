import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../order-service.service';
import { CartServiceService } from '../cart-service.service';
import { ProductModel } from '../models/productmodel';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private orderService:OrderServiceService,private cartService:CartServiceService) {
    this.cartService.getAll().subscribe(data=>{
      this.cart=data;
    })
   }
  cart:Array<ProductModel>;
  ngOnInit() {
  }
  makeOrder(){
    this.orderService.makeOrder().subscribe();
  }
  removeItem(id:number){
    this.cartService.removeItem(id).subscribe();
    this.cart.splice(id,1);
  }
}
