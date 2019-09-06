import { Component } from '@angular/core';
import { CartServiceService } from './cart-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store';
  constructor(private cartService:CartServiceService){
    cartService.getCartToken().subscribe(data=>{
      localStorage.setItem("cartToken",data);
    })
  }
}
