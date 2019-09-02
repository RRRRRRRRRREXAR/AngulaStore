import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { CategoryComponentComponent } from './category-component/category-component.component';
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataSharingService } from './data-sharing.service';
import { CreateproductComponent } from './createproduct/createproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    OrderComponent,
    CartComponent,
    ProductComponentComponent,
    CategoryComponentComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    CreateproductComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
