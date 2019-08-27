import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { CategoryComponentComponent } from './category-component/category-component.component';
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    OrderComponent,
    CartComponent,
    ProductComponentComponent,
    CategoryComponentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
