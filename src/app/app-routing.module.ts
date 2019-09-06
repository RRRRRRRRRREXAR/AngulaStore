import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponentComponent } from './product-component/product-component.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { OrderComponent } from './order/order.component';
 
const routes: Routes = [
  { path: 'products', component: ProductComponentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'products', component: ProductComponentComponent },
  {path:'admin/createproduct',component:CreateproductComponent},
  {path:'admin/createcategory',component:CreatecategoryComponent},
  {path:'order',component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }