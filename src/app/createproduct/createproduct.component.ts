import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CategoryServiceService } from '../category-service.service';
import { ProductService } from '../product-service.service';
import { ProductModel } from '../models/productmodel';
import { Router } from '@angular/router';
import { CategoryModel } from '../models/categorymodel';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  constructor(private categoryService:CategoryServiceService,private productService:ProductService,private router:Router) { }
  
  productForm= new FormGroup({
    Name:new FormControl(''),
    Category:new FormControl(''),
    Description:new FormControl(''),
    Price:new FormControl(''),
  });
  public categories:Array<CategoryModel>;

  ngOnInit() {
    this.categoryService.getAll().subscribe(data=>{
      this.categories=data;
    });
  }
  onSubmit(){
    let obj = new ProductModel;
    obj.Name=this.productForm.get('Name').value;
    obj.Description=this.productForm.get('Description').value;
    obj.Price=this.productForm.get('Price').value;
    obj.Category= new CategoryModel();
    obj.Category.Id=this.productForm.get('Category').value;
    this.productService.create(obj).subscribe(data=>{
    console.log(data);});
    this.router.navigate(['products']);
  }
}
