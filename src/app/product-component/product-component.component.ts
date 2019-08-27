import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product-service.service';
import {ProductModel} from '../models/productmodel';
import { HttpClient, /* other http imports */ } from "@angular/common/http";

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  productList:Array<ProductModel>;
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getAll().subscribe(data=>{
      this.productList=data;
    });
  }

}
